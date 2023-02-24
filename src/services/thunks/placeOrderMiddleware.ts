import { placeOrder } from '../../utils/apiCall'
import { Ingredient } from '../../utils/types'
import { actionCreators } from '../action-creators/action-creators'

export function placeOrderMiddleware(ingredientsIds: Ingredient['_id'][]) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(actionCreators.placeOrderRequest())
    placeOrder(ingredientsIds)
      .then(res => {
        dispatch(actionCreators.placeOrderSuccess({ name: res.name as string, number: res.order.number as number }))
      })
      .catch(err => {
        console.log(err.message)
        dispatch(actionCreators.placeOrderError())
      })
  }
}
