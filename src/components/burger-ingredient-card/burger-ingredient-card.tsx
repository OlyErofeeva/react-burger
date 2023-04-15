import React from 'react'
import { useDrag } from 'react-dnd'
import { Link, useLocation } from 'react-router-dom'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredient-card.module.css'
import { Ingredient } from '../../services/types/ingredient'
import { activeModalIngredientActionCreator } from '../../services/action-creators'
import { useDispatch } from '../../services/hooks/useDispatch'

type Props = {
  ingredient: Ingredient
  counter?: number
}

const BurgerIngredientCard: React.FC<Props> = ({ ingredient, counter }) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const handleClick = (ingredient: Ingredient) => {
    dispatch(activeModalIngredientActionCreator.set(ingredient))
  }

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ...ingredient },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })

  return (
    // TODO: add className instead of inline styles
    <Link to={`/ingredients/${ingredient._id}`} state={{ modalLocation: location }} className={styles.link}>
      <article
        ref={dragRef}
        className={styles.ingredientCard}
        style={{ opacity }}
        onClick={() => handleClick(ingredient)}
      >
        <img className="pl-4 pr-4" src={ingredient.image} alt={`изображение ингредиента ${ingredient.name}`} />
        <div className={styles.priceContainer}>
          {/* TODO: use Price component */}
          <span className="text text_type_digits-default">{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`text text_type_main-default ${styles.name}`}>{ingredient.name}</p>
        <Counter count={counter || 0} size="default" extraClass={styles.counter} />
      </article>
    </Link>
  )
}

export default BurgerIngredientCard
