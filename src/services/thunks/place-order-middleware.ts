import { placeOrder } from '../../utils/api-call'
import { CookieName, getCookie } from '../../utils/cookie'
import { Ingredient } from '../types/ingredient'
import { constructorActionCreator, orderActionCreator } from '../action-creators'
import { refreshTokenMiddleware } from './refresh-token-middleware'
import { AppDispatch, AppThunkAction } from '../types/common'

export function placeOrderMiddleware(ingredientsIds: Ingredient['_id'][]): AppThunkAction {
  return (dispatch: AppDispatch) => {
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
