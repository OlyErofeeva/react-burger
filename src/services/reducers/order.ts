import { ActionType } from '../action-types/action-types'
import { GlobalState, Progress } from '../types/common'
import { OrderAction } from '../types/order'

export const initialState: GlobalState['order'] = {
  item: null,
  itemAddProgress: Progress.IDLE,
}

export const orderReducer = (state = initialState, action: OrderAction): GlobalState['order'] => {
  switch (action.type) {
    case ActionType.PlaceOrderRequest:
      return {
        ...state,
        itemAddProgress: Progress.WORK,
      }
    case ActionType.PlaceOrderSuccess:
      return {
        ...state,
        item: action.payload,
        itemAddProgress: Progress.SUCCESS,
      }
    case ActionType.PlaceOrderError:
      return {
        ...initialState,
        itemAddProgress: Progress.ERROR,
      }
    default:
      return state
  }
}
