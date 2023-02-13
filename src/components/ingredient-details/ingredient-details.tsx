import { Ingredient } from '../../utils/types'
import styles from './ingredient-details.module.css'
import Modal from '../modal/modal'

type Props = {
  ingredient: Ingredient
  onClose: () => void
}

const IngredientDetails: React.FC<Props> = ({ ingredient, onClose }) => {
  return (
    <Modal onClose={onClose} title="Детали ингредиента">
      <div className={styles.ingredientModalContent}>
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
    </Modal>
  )
}

export default IngredientDetails
