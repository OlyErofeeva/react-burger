import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDrop } from 'react-dnd'
import { v4 as uuid } from 'uuid'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient'
import { constructorIngredientsSelector } from '../../services/selectors/selectors'
import { Ingredient } from '../../utils/types'
import { actionCreators } from '../../services/action-creators/action-creators'
import { IngredientType } from '../../utils/types'

type Props = {
  onPlaceOrderClick: (ingredientsIds: Ingredient['_id'][]) => void
}

const BurgerConstructor: React.FC<Props> = ({ onPlaceOrderClick }) => {
  const dispatch = useDispatch()
  const constructorIngredients = useSelector(constructorIngredientsSelector)
  // TODO make use of isHover - add some styles to the drop container
  const [{ isHover }, dropTargerRef] = useDrop<Ingredient, any, any>({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    drop(item: Ingredient) {
      const constructorItem = {
        ...item,
        constructorId: uuid(),
      }
      // TODO refactor if-else
      if (item.type === IngredientType.BUN) {
        const duplicatedItem = {
          ...item,
          constructorId: uuid(),
        }
        if (constructorIngredients.length < 2) {
          dispatch(actionCreators.setConstructorIngredients([constructorItem, duplicatedItem]))
        } else {
          const arr = [...constructorIngredients]
          arr[0] = constructorItem
          arr[constructorIngredients.length - 1] = duplicatedItem
          dispatch(actionCreators.setConstructorIngredients(arr))
        }
      } else {
        if (constructorIngredients.length < 2) {
          // TODO add error meessage about 'BUNS FIRST'
          return
        }
        const notBuns = constructorIngredients.slice(1, constructorIngredients.length - 1)
        const newArr = [
          constructorIngredients[0],
          constructorItem,
          ...notBuns,
          constructorIngredients[constructorIngredients.length - 1],
        ]
        dispatch(actionCreators.setConstructorIngredients(newArr))
      }
    },
  })

  const ingredientsIds = constructorIngredients.map(ingredient => {
    return ingredient._id
  })
  const calcTotal = useMemo(() => {
    return constructorIngredients.reduce((acc, item) => acc + item.price, 0)
  }, [constructorIngredients])

  const topElement = constructorIngredients[0]
  const bottomElement = constructorIngredients[constructorIngredients.length - 1]

  if (constructorIngredients.length === 0) {
    // TODO make it semantic & beautiful
    return (
      <div ref={dropTargerRef} className={`pt-25 ${styles.burgerConstructor}`}>
        Перетащите сюда ингредиенты. Начните с выбора булки
      </div>
    )
  }

  return (
    <div ref={dropTargerRef} className={`pt-25 ${styles.burgerConstructor}`}>
      <ul className={styles.addedIngredients}>
        <BurgerConstructorIngredient key={topElement.constructorId} ingredient={topElement} type={'top'} />

        <div className={styles.innerIngredients}>
          {constructorIngredients.slice(1, constructorIngredients.length - 1).map((ingredient, idx) => {
            return <BurgerConstructorIngredient key={ingredient.constructorId} ingredient={ingredient} />
          })}
        </div>

        <BurgerConstructorIngredient key={bottomElement.constructorId} ingredient={bottomElement} type={'bottom'} />
      </ul>

      <div className={`mt-10 ${styles.constructorTotal}`}>
        <span className="mr-2 text text_type_digits-medium">{calcTotal}</span>
        <CurrencyIcon type="primary" />
        <Button
          onClick={() => onPlaceOrderClick(ingredientsIds)}
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="ml-10"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default BurgerConstructor
