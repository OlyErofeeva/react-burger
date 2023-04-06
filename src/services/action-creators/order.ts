import { OrderActionType } from '../action-types/action-types'
import { Order, PlaceOrderErrorAction, PlaceOrderRequestAction, PlaceOrderSuccessAction } from '../types/order'

export const orderActionCreator = {
  placeOrderRequest: (): PlaceOrderRequestAction => ({
    type: OrderActionType.PlaceRequest,
  }),
  placeOrderSuccess: (payload: Order): PlaceOrderSuccessAction => ({
    type: OrderActionType.PlaceSuccess,
    payload: payload,
  }),
  placeOrderError: (): PlaceOrderErrorAction => ({
    type: OrderActionType.PlaceError,
  }),
}
