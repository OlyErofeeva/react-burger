import React, { useMemo } from 'react'
import styles from './burger-constructor.module.css'
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'
import { constructorIngredientsSelector } from '../../services/selectors/selectors'
import { Ingredient } from '../../utils/types'

type Props = {
  onPlaceOrderClick: (ingredientsIds: Ingredient['_id'][]) => void
}

const BurgerConstructor: React.FC<Props> = ({ onPlaceOrderClick }) => {
  const constructorIngredients = useSelector(constructorIngredientsSelector)
  const ingredientsIds = constructorIngredients.map((ingredient) => {
    return ingredient._id
  })
  const calcTotal = useMemo(() => {
    return constructorIngredients.reduce((acc, item) => acc + item.price, 0)
  }, [constructorIngredients])

  // TODO check data length, remove hardcode
  const topElement = constructorIngredients[0]
  const bottomElement = constructorIngredients[constructorIngredients.length - 1]

  return (
    <div className={`pt-25 ${styles.burgerConstructor}`}>
      <ul className={styles.addedIngredients}>
        <BurgerConstructorIngredient
          key={topElement._id}
          imgSrc={topElement.image}
          price={topElement.price}
          text={topElement.name}
          type={'top'}
        />

        <div className={styles.innerIngredients}>
          {constructorIngredients.slice(1, constructorIngredients.length - 1).map((ingredient, idx) => {
            return (
              <BurgerConstructorIngredient
                key={ingredient._id}
                imgSrc={ingredient.image}
                price={ingredient.price}
                text={ingredient.name}
              />
            )
          })}
        </div>

        <BurgerConstructorIngredient
          key={bottomElement._id}
          imgSrc={bottomElement.image}
          price={bottomElement.price}
          text={bottomElement.name}
          type={'bottom'}
        />
      </ul>

      <div className={`mt-10 ${styles.constructorTotal}`}>
        <span className="mr-2 text text_type_digits-medium">{calcTotal}</span>
        <CurrencyIcon type="primary" />
        <Button onClick={() => onPlaceOrderClick(ingredientsIds)} htmlType="submit" type="primary" size="large" extraClass="ml-10">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default BurgerConstructor
