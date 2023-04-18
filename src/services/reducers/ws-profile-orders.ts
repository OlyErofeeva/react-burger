import { WSProfileOrdersActionType } from '../action-types/ws-action-types'
import { WSProfileOrdersAction, WSProfileOrdersState } from '../types/ws-profile-orders'

export const initialState: WSProfileOrdersState = {
  items: [],
  wsConnected: false,
}

export const wsProfileOrdersReducer = (state = initialState, action: WSProfileOrdersAction): WSProfileOrdersState => {
  switch (action.type) {
    case WSProfileOrdersActionType.ConnectionSuccess:
      return {
        ...state,
        wsConnected: true,
      }
    case WSProfileOrdersActionType.ConnectionError:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      }
    case WSProfileOrdersActionType.ConnectionClosed:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      }
    case WSProfileOrdersActionType.GetMessage:
      return {
        ...state,
        error: undefined,
        items: action.payload.orders,
      }
    default:
      return state
  }
}
