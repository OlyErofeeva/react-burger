import { placeOrder } from '../../utils/apiCall'
import { Ingredient } from '../../utils/types'
import { orderActionCreator } from '../action-creators'

export function placeOrderMiddleware(ingredientsIds: Ingredient['_id'][]) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(orderActionCreator.placeOrderRequest())
    placeOrder(ingredientsIds)
      .then(res => {
        dispatch(orderActionCreator.placeOrderSuccess({ name: res.name as string, number: res.order.number as number }))
      })
      .catch(err => {
        console.log(err.message)
        dispatch(orderActionCreator.placeOrderError())
      })
  }
}
