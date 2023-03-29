import { placeOrder } from '../../utils/api-call'
import { CookieName, getCookie } from '../../utils/cookie'
import { Ingredient } from '../../utils/types'
import { constructorActionCreator, orderActionCreator } from '../action-creators'
import { refreshTokenMiddleware } from './refresh-token-middleware'

export function placeOrderMiddleware(ingredientsIds: Ingredient['_id'][]) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    const accessToken = getCookie(CookieName.AccessToken)
    dispatch(orderActionCreator.placeOrderRequest())
    placeOrder(ingredientsIds, accessToken || '')
      .then(res => {
        dispatch(orderActionCreator.placeOrderSuccess({ name: res.name, number: res.order.number }))
        dispatch(constructorActionCreator.setIngredients([]))
      })
      .catch(err => {
        console.log(err?.message)
        if (err?.message.includes('jwt expired')) {
          dispatch(refreshTokenMiddleware(placeOrderMiddleware(ingredientsIds), orderActionCreator.placeOrderError()))
        } else {
          dispatch(orderActionCreator.placeOrderError())
        }
      })
  }
}
