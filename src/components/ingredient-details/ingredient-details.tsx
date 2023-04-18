import styles from './ingredient-details.module.css'
import { Ingredient } from '../../services/types/ingredient'

type Props = {
  ingredient: Ingredient
}

const IngredientDetails: React.FC<Props> = ({ ingredient }) => {
  return (
    <>
      <img src={ingredient.image_large} alt={`изображение ингредиента ${ingredient.name}`} className={styles.image} />
      <span className="mt-4 mb-8 text text_type_main-medium">{ingredient.name}</span>
      <div className={`mb-5 ${styles.nutrientsTable}`}>
        <span className="text text_type_main-default text_color_inactive">Калории, ккал</span>
        <span className="text text_type_main-default text_color_inactive">Белки, г</span>
        <span className="text text_type_main-default text_color_inactive">Жиры, г</span>
        <span className="text text_type_main-default text_color_inactive">Углеводы, г</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
        <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
      </div>
    </>
  )
}

export default IngredientDetails
