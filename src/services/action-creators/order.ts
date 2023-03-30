import { ActionType } from '../action-types/action-types'
import { Order } from '../types/order'

export const orderActionCreator = {
  placeOrderRequest: () => ({
    type: ActionType.PlaceOrderRequest,
  }),
  placeOrderSuccess: (payload: Order) => ({
    type: ActionType.PlaceOrderSuccess,
    payload: payload,
  }),
  placeOrderError: () => ({
    type: ActionType.PlaceOrderError,
  }),
}
