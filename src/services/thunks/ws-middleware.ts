import { Middleware, MiddlewareAPI } from 'redux'
import { WSFeedActionType, WSProfileOrdersActionType } from '../action-types/ws-action-types'
import { AppDispatch, ApplicationActions, GlobalState } from '../types/common'
import { FeedResponse, ProfileOrdersResponse } from '../types/api'

export type WSActionTypes = {
  connect: WSFeedActionType.ConnectionStart | WSProfileOrdersActionType.ConnectionStart
  disconnect: WSFeedActionType.Disconnect | WSProfileOrdersActionType.Disconnect
  wsConnectionSuccess: WSFeedActionType.ConnectionSuccess | WSProfileOrdersActionType.ConnectionSuccess
  wsConnectionError: WSFeedActionType.ConnectionError | WSProfileOrdersActionType.ConnectionError
  wsConnectionClosed: WSFeedActionType.ConnectionClosed | WSProfileOrdersActionType.ConnectionClosed
  wsGetMessage: WSFeedActionType.GetMessage | WSProfileOrdersActionType.GetMessage
}

export const wsMiddleware = (wsActionTypes: WSActionTypes): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, GlobalState>) => {
    let socket: WebSocket | null = null

    return next => (action: ApplicationActions) => {
      const { dispatch } = store

      if (action.type === wsActionTypes.connect) {
        socket = new WebSocket(action.payload)
      }

      if (socket && action.type === wsActionTypes.disconnect) {
        socket.close()
        socket = null
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: wsActionTypes.wsConnectionSuccess })
        }

        socket.onerror = event => {
          dispatch({ type: wsActionTypes.wsConnectionError, payload: event })
        }

        socket.onmessage = (event: MessageEvent) => {
          const { data } = event
          const parsedData: FeedResponse | ProfileOrdersResponse = JSON.parse(data)
          dispatch({ type: wsActionTypes.wsGetMessage, payload: parsedData })
        }

        socket.onclose = event => {
          dispatch({ type: wsActionTypes.wsConnectionClosed })
        }
      }

      next(action)
    }
  }
}
