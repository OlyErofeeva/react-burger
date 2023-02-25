import { fetchIngredients } from '../../utils/apiCall'
import { actionCreators } from '../action-creators/action-creators'

// TODO fix ts-ignore
// @ts-ignore
export const fetchIngredientsMiddleware = dispatch => {
  dispatch(actionCreators.ingredientsFetchRequest())
  fetchIngredients()
    .then(res => {
      dispatch(actionCreators.ingredientsFetchSuccess(res.data))
    })
    .catch(err => {
      console.log(err.message)
      dispatch(actionCreators.ingredientsFetchError())
    })
}
