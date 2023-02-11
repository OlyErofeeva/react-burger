import React from 'react'
import styles from './burger-ingredients.module.css'
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { Ingredient } from '../../utils/types'

type Props = {
  ingredients: Ingredient[]
}

const BurgerIngredients: React.FC<Props> = ({ ingredients }) => (
  <div className={styles.burgerIngredients}>
    <h1 className={`text text_type_main-large pt-10 pb-5 ${styles.mainTitle}`}>Соберите бургер</h1>
    <ul className={`mb-10 ${styles.tabList}`}>
      {/* TODO: add active prop logic, onClick */}
      {/* TODO: make arr [{ type: 'bun'; name: 'Булки' }, {..}, {..}] */}
      <li>
        <Tab value="bun" active={true} onClick={() => console.log('TODO')}>
          Булки
        </Tab>
      </li>
      <li>
        <Tab value="sauce" active={false} onClick={() => console.log('TODO')}>
          Соусы
        </Tab>
      </li>
      <li>
        <Tab value="main" active={false} onClick={() => console.log('TODO')}>
          Начинки
        </Tab>
      </li>
    </ul>

    {/* TODO: make arr [{ type: 'bun'; name: 'Булки' }, {..}, {..}] */}
    <div className={styles.allIngredients}>
      <section>
        <h2 className={`text text_type_main-medium ${styles.groupTitle}`}>Булки</h2>
        <ul className={`pt-6 pb-10 pl-4 pr-4 ${styles.ingredientGroupedList}`}>
          {ingredients
            .filter(ingredient => ingredient.type === 'bun')
            .map(ingredient => {
              return (
                <li key={ingredient._id}>
                  <BurgerIngredientCard imgSrc={ingredient.image} name={ingredient.name} price={ingredient.price} />
                </li>
              )
            })}
        </ul>
      </section>

      {/* TODO: IngredientSection-2 */}
      <section>
        <h2 className={`text text_type_main-medium ${styles.groupTitle}`}>Соусы</h2>
        <ul className={`pt-6 pb-10 pl-4 pr-4 ${styles.ingredientGroupedList}`}>
          {ingredients
            .filter(ingredient => ingredient.type === 'sauce')
            .map(ingredient => {
              return (
                <li key={ingredient._id}>
                  <BurgerIngredientCard imgSrc={ingredient.image} name={ingredient.name} price={ingredient.price} />
                </li>
              )
            })}
        </ul>
      </section>

      {/* TODO: IngredientSection-3 */}
      <section>
        <h2 className={`text text_type_main-medium ${styles.groupTitle}`}>Начинки</h2>
        <ul className={`pt-6 pb-10 pl-4 pr-4 ${styles.ingredientGroupedList}`}>
          {ingredients
            .filter(ingredient => ingredient.type === 'main')
            .map(ingredient => {
              return (
                <li key={ingredient._id}>
                  <BurgerIngredientCard imgSrc={ingredient.image} name={ingredient.name} price={ingredient.price} />
                </li>
              )
            })}
        </ul>
      </section>
    </div>
  </div>
)

export default BurgerIngredients
