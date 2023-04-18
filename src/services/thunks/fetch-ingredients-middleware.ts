import { fetchIngredients } from '../../utils/api-call'
import { ingredientsActionCreator } from '../action-creators'
import { AppDispatch } from '../types/common'

export const fetchIngredientsMiddleware = (dispatch: AppDispatch) => {
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
