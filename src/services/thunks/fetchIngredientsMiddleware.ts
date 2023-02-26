import { fetchIngredients } from '../../utils/apiCall'
import { ingredientsActionCreator } from '../action-creators'

// TODO fix ts-ignore
// @ts-ignore
export const fetchIngredientsMiddleware = dispatch => {
  dispatch(ingredientsActionCreator.fetchRequest())
  fetchIngredients()
    .then(res => {
      dispatch(ingredientsActionCreator.fetchSuccess(res.data))
    })
    .catch(err => {
      console.log(err.message)
      dispatch(ingredientsActionCreator.fetchError())
    })
}
