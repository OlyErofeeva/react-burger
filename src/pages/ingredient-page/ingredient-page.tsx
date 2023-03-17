import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { allIngredientsSelector } from '../../services/selectors/selectors'
import styles from './ingredient-page.module.css'

const IngredientPage = () => {
  const allIngredients = useSelector(allIngredientsSelector)
  const { id } = useParams()
  const ingredient = allIngredients.find(item => item._id === id)

  if (!ingredient) {
    return null
  }

  return (
    <div className={`mt-30 ${styles.ingredientPageContent}`}>
      <h1 className="text text_type_main-large">Детали ингредиента</h1>
      <img src={ingredient.image_large} alt={`изображение ингредиента ${ingredient.name}`} className={styles.image} />
      <span className="mt-4 mb-8 text text_type_main-medium">{ingredient.name}</span>
      <div className={styles.nutrientsTable}>
        <span className="text text_type_main-default text_color_inactive">Калории, ккал</span>
        <span className="text text_type_main-default text_color_inactive">Белки, г</span>
        <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
        <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
      </div>
    </div>
  )
}

export default IngredientPage
