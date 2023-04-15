import { WSFeedActionType } from '../action-types/ws-action-types'
import { WSFeedAction, WSFeedState } from '../types/ws-feed'

export const initialState: WSFeedState = {
  feed: null,
  wsConnected: false,
}

export const wsFeedReducer = (state = initialState, action: WSFeedAction): WSFeedState => {
  switch (action.type) {
    case WSFeedActionType.ConnectionSuccess:
      return {
        ...state,
        wsConnected: true,
      }
    case WSFeedActionType.ConnectionError:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      }
    case WSFeedActionType.ConnectionClosed:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      }
    case WSFeedActionType.GetMessage:
      return {
        ...state,
        error: undefined,
        feed: action.payload,
      }
    default:
      return state
  }
}
