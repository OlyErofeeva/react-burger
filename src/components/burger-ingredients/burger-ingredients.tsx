import React, { useMemo, useState } from 'react'
import styles from './burger-ingredients.module.css'
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card'
import IngredientDetails from '../ingredient-details/ingredient-details'
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
}

const BurgerIngredients: React.FC<Props> = ({ ingredients }) => {
  // Hint: there are no such state as [isIngredientModalOpen, setIngredientModalOpen],
  // because [activeModalIngredient, setActiveModalIngredient] does the same job
  const [activeModalIngredient, setActiveModalIngredient] = useState<Ingredient | null>(null)
  const [activeTab, setActiveTab] = useState(IngredientType.BUN)

  const handleBurgerIngredientClick = (ingredient: Ingredient) => {
    setActiveModalIngredient(ingredient)
  }

  const handleIngredientDetailsClose = () => {
    setActiveModalIngredient(null)
  }

  const handleTabClick = (itemType: IngredientType) => {
    // TODO: add scroll logic
    setActiveTab(itemType)
  }

  const groupIngredientsByType = useMemo(() => {
    const map = new Map<IngredientType, Ingredient[]>()
    ingredients.forEach(ingredient => {
      if (map.has(ingredient.type)) {
        map.get(ingredient.type)?.push(ingredient)
      } else {
        map.set(ingredient.type, [ingredient])
      }
    })
    // should result in a map like {'bun' => Array(2), 'main' => Array(9), 'sauce' => Array(4)}
    return map
  }, [ingredients])

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
                {(groupIngredientsByType.get(ingredientType.type) || [])
                  .map(ingredient => {
                    return (
                      <li key={ingredient._id} onClick={() => handleBurgerIngredientClick(ingredient)}>
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
      {activeModalIngredient && <IngredientDetails ingredient={activeModalIngredient} onClose={handleIngredientDetailsClose} />}
    </div>
  )
}

export default BurgerIngredients
