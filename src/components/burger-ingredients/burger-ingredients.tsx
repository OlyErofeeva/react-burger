import React, { useState } from 'react'
import styles from './burger-ingredients.module.css'
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { Ingredient, IngredientType } from '../../utils/types'

const ingredientTypes = [
  {
    type: IngredientType.BUN,
    title: 'Булки',
  },
  {
    type: IngredientType.SAUCE,
    title: 'Соусы',
  },
  {
    type: IngredientType.MAIN,
    title: 'Начинки',
  },
]

type Props = {
  ingredients: Ingredient[]
  onIngredientClick: (ingredient: Ingredient) => void
}

const BurgerIngredients: React.FC<Props> = ({ ingredients, onIngredientClick }) => {
  const [activeTab, setActiveTab] = useState(IngredientType.BUN)

  const handleTabClick = (itemType: IngredientType) => {
    // TODO: add scroll logic
    setActiveTab(itemType)
  }

  return (
    <div className={styles.burgerIngredients}>
      <h1 className={`text text_type_main-large pt-10 pb-5 ${styles.mainTitle}`}>Соберите бургер</h1>
      <ul className={`mb-10 ${styles.tabList}`}>
        {ingredientTypes.map(ingredientType => {
          return (
            <li key={ingredientType.type}>
              <Tab
                value={ingredientType.type}
                active={activeTab === ingredientType.type}
                onClick={() => handleTabClick(ingredientType.type)}
              >
                {ingredientType.title}
              </Tab>
            </li>
          )
        })}
      </ul>

      <div className={styles.allIngredients}>
        {ingredientTypes.map(ingredientType => {
          return (
            <section>
              <h2 className={`text text_type_main-medium ${styles.groupTitle}`}>{ingredientType.title}</h2>
              <ul className={`pt-6 pb-10 pl-4 pr-4 ${styles.ingredientGroupedList}`}>
                {ingredients
                  .filter(ingredient => ingredient.type === ingredientType.type)
                  .map(ingredient => {
                    return (
                      <li key={ingredient._id} onClick={() => onIngredientClick(ingredient)}>
                        <BurgerIngredientCard
                          imgSrc={ingredient.image}
                          name={ingredient.name}
                          price={ingredient.price}
                        />
                      </li>
                    )
                  })}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default BurgerIngredients
