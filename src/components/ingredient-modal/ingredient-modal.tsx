import { useNavigate, useParams } from 'react-router-dom'
import { activeModalIngredientActionCreator } from '../../services/action-creators'
import { activeModalIngredientSelector, allIngredientsSelector } from '../../services/selectors/selectors'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import { useSelector } from '../../services/hooks/useSelector'
import { useDispatch } from '../../services/hooks/useDispatch'

const IngredientModal = () => {
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
    <Modal
      onClose={handleIngredientDetailsClose}
      titleElement={<h2 className="text text_type_main-large">Детали ингредиента</h2>}
    >
      <IngredientDetails ingredient={ingredient} />
    </Modal>
  )
}

export default IngredientModal
