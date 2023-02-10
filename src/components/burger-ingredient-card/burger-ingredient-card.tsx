import React from 'react'
import styles from './burger-ingredient-card.module.css'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

type Props = {
  imgSrc: string // TODO: optional
  name: string
  price: number
}

const BurgerIngredientCard: React.FC<Props> = ({ imgSrc, name, price }) => {
  return (
    <article className={styles.ingredientCard}>
      <img className="pl-4 pr-4" src={imgSrc} alt={`изображение ингредиента ${name}`} />
      <div className={styles.priceContainer}>
        <span className="text text_type_digits-default">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${styles.name}`}>{name}</p>
      {/* TODO remove hardcoded number in an order */}
      <Counter count={3} size="default" extraClass={styles.counter} />
    </article>
  )
}

export default BurgerIngredientCard
