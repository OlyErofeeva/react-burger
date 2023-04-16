import { applyMiddleware, compose, createStore } from 'redux'
import { initialState, rootReducer } from './reducers/root'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { WSActionTypes, wsMiddleware } from './thunks/ws-middleware'
import { WSFeedActionType, WSProfileOrdersActionType } from './action-types/ws-action-types'

const WSFeedActionTypes: WSActionTypes = {
  connect: WSFeedActionType.ConnectionStart,
  disconnect: WSFeedActionType.Disconnect,
  wsConnectionSuccess: WSFeedActionType.ConnectionSuccess,
  wsConnectionError: WSFeedActionType.ConnectionError,
  wsConnectionClosed: WSFeedActionType.ConnectionClosed,
  wsGetMessage: WSFeedActionType.GetMessage,
}

const WSProfileOrdersActionTypes: WSActionTypes = {
  connect: WSProfileOrdersActionType.ConnectionStart,
  disconnect: WSProfileOrdersActionType.Disconnect,
  wsConnectionSuccess: WSProfileOrdersActionType.ConnectionSuccess,
  wsConnectionError: WSProfileOrdersActionType.ConnectionError,
  wsConnectionClosed: WSProfileOrdersActionType.ConnectionClosed,
  wsGetMessage: WSProfileOrdersActionType.GetMessage,
}

export const store = createStore(
  rootReducer,
  initialState,
  typeof window === 'object' && composeWithDevTools
    ? composeWithDevTools(
        applyMiddleware(thunk, wsMiddleware(WSFeedActionTypes), wsMiddleware(WSProfileOrdersActionTypes)),
      )
    : compose,
)
