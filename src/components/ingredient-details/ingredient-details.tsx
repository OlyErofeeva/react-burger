import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './ingredient-details.module.css'
import Modal from '../modal/modal'
import { activeModalIngredientSelector, allIngredientsSelector } from '../../services/selectors/selectors'
import { activeModalIngredientActionCreator } from '../../services/action-creators'

const IngredientDetails = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const allIngredients = useSelector(allIngredientsSelector)
  const ingredient = useSelector(activeModalIngredientSelector) || allIngredients.find(item => item._id === id)

  const handleIngredientDetailsClose = () => {
    dispatch(activeModalIngredientActionCreator.clear())
    navigate(-1)
  }

  if (!ingredient) {
    return null
  }

  return (
    <Modal onClose={handleIngredientDetailsClose} title="Детали ингредиента">
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
