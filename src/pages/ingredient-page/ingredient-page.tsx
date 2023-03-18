import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import IngredientDetails from '../../components/ingredient-details/ingredient-details'
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
      <IngredientDetails ingredient={ingredient} />
    </div>
  )
}

export default IngredientPage
