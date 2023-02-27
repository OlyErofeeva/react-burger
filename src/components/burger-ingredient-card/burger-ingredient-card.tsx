import React from 'react'
import { useDrag } from 'react-dnd'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredient-card.module.css'
import { Ingredient } from '../../utils/types'

type Props = {
  ingredient: Ingredient
  counter?: number
}

const BurgerIngredientCard: React.FC<Props> = ({ ingredient, counter }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ...ingredient },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })
  return (
    // TODO: add className instead of inline styles
    <article ref={dragRef} className={styles.ingredientCard} style={{ opacity }}>
      <img className="pl-4 pr-4" src={ingredient.image} alt={`изображение ингредиента ${ingredient.name}`} />
      <div className={styles.priceContainer}>
        <span className="text text_type_digits-default">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default ${styles.name}`}>{ingredient.name}</p>
      <Counter count={counter || 0} size="default" extraClass={styles.counter} />
    </article>
  )
}

export default BurgerIngredientCard
