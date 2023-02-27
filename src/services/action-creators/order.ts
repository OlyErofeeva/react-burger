import { Order } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

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
