import { OrderActionType } from '../action-types/action-types'
import { Progress } from '../types/common'
import { OrderAction, OrderState } from '../types/order'

export const initialState: OrderState = {
  item: null,
  itemAddProgress: Progress.IDLE,
}

export const orderReducer = (state = initialState, action: OrderAction): OrderState => {
  switch (action.type) {
    case OrderActionType.PlaceRequest:
      return {
        ...state,
        itemAddProgress: Progress.WORK,
      }
    case OrderActionType.PlaceSuccess:
      return {
        ...state,
        item: action.payload,
        itemAddProgress: Progress.SUCCESS,
      }
    case OrderActionType.PlaceError:
      return {
        ...initialState,
        itemAddProgress: Progress.ERROR,
      }
    default:
      return state
  }
}
