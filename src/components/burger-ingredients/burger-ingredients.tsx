import React, { UIEvent, useMemo, useState } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card'
import { Ingredient, IngredientType } from '../../services/types/ingredient'
import { Progress } from '../../services/types/common'
import {
  allIngredientsSelector,
  constructorIngredientsSelector,
  ingredientsFetchProgressSelector,
} from '../../services/selectors/selectors'
import { useSelector } from '../../services/hooks/useSelector'
import styles from './burger-ingredients.module.css'

const ingredientSections = [
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

const BurgerIngredients: React.FC = () => {
  const allIngredients = useSelector(allIngredientsSelector)
  const ingredientsFetchProgress = useSelector(ingredientsFetchProgressSelector)
  const constructorIngredients = useSelector(constructorIngredientsSelector)
  const [activeTab, setActiveTab] = useState(IngredientType.BUN)

  const handleTabClick = (itemType: IngredientType) => {
    setActiveTab(itemType)
  }

  const groupIngredientsByType = useMemo(() => {
    const map = new Map<IngredientType, Ingredient[]>()
    allIngredients.forEach(ingredient => {
      if (map.has(ingredient.type)) {
        map.get(ingredient.type)?.push(ingredient)
      } else {
        map.set(ingredient.type, [ingredient])
      }
    })
    // should result in a map like {'bun' => Array(2), 'main' => Array(9), 'sauce' => Array(4)}
    return map
  }, [allIngredients])

  const mapWithAddedIngredients = useMemo(() => {
    // should result in a map like {'60666c42cc7b410027a1a9b7' => 1, '60666c42cc7b410027a1a9b6' => 3, etc.}
    const map = new Map<Ingredient['_id'], number>()
    constructorIngredients.forEach(item => {
      const currentAmount = map.get(item._id) || 0
      map.set(item._id, currentAmount + 1)
    })
    return map
  }, [constructorIngredients])

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const ingredientSections = Array.from((e.target as HTMLDivElement).children)
    const startingPoint = (e.target as HTMLDivElement).getBoundingClientRect().top
    const unscrolledSections = ingredientSections.filter(
      item => item.getBoundingClientRect().bottom - startingPoint > 36,
    )
    if (unscrolledSections.length > 0) {
      setActiveTab(unscrolledSections[0].id as IngredientType)
    } else {
      setActiveTab(ingredientSections[ingredientSections.length - 1].id as IngredientType)
    }
  }

  if (ingredientsFetchProgress !== Progress.SUCCESS) {
    return null
  }

  return (
    <div className={styles.burgerIngredients}>
      <h1 className={`text text_type_main-large pt-10 pb-5 ${styles.mainTitle}`}>Соберите бургер</h1>
      <ul className={`mb-10 ${styles.tabList}`}>
        {ingredientSections.map(ingredientSection => {
          return (
            <li key={ingredientSection.type}>
              <a href={`#${ingredientSection.type}`} className={styles.anchorTab}>
                <Tab
                  value={ingredientSection.type}
                  active={activeTab === ingredientSection.type}
                  onClick={() => handleTabClick(ingredientSection.type)}
                >
                  {ingredientSection.title}
                </Tab>
              </a>
            </li>
          )
        })}
      </ul>

      <div className={styles.allIngredients} onScroll={handleScroll}>
        {ingredientSections.map(ingredientSection => {
          return (
            <section id={ingredientSection.type} key={ingredientSection.type} data-test-id={`${ingredientSection.type}-section`}>
              <h2 className={`text text_type_main-medium ${styles.groupTitle}`}>{ingredientSection.title}</h2>
              <ul className={`pt-6 pb-10 pl-4 pr-4 ${styles.ingredientGroupedList}`}>
                {(groupIngredientsByType.get(ingredientSection.type) || []).map(ingredient => {
                  return (
                    <li key={ingredient._id}>
                      <BurgerIngredientCard
                        ingredient={ingredient}
                        counter={mapWithAddedIngredients.get(ingredient._id)}
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
