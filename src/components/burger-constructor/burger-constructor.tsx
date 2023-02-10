import React from 'react'
import styles from './burger-constructor.module.css'
import { data } from '../../utils/data'
import BurgerConstructorIngredient from '../burger-constructor-ingredient/burger-constructor-ingredient'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = () => {
  const calcTotal = () => data.reduce((acc, item) => acc + item.price, 0)

  // TODO check data length, remove hardcode
  const topElement = data[0]
  const bottomElement = data[data.length - 1]

  return (
    <div className={`pl-4 pr-4 pt-25 ${styles.burgerConstructor}`}>
      <ul className={styles.constructorIngredientList}>
        <BurgerConstructorIngredient
          key={topElement._id}
          imgSrc={topElement.image}
          price={topElement.price}
          text={topElement.name}
          type={'top'}
        />

        <div className={styles.innerIngredients}>
          {data.slice(1, data.length - 1).map((ingredient, idx) => {
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
        <span className="mr-2 text text_type_digits-medium">{calcTotal()}</span>
        <CurrencyIcon type="primary" />
        <Button htmlType="submit" type="primary" size="large" extraClass="ml-10">
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

export default BurgerConstructor
