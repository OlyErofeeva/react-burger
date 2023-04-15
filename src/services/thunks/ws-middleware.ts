import { Middleware, MiddlewareAPI } from 'redux'
import { WSFeedActionType } from '../action-types/ws-action-types'
import { AppDispatch, ApplicationActions, GlobalState } from '../types/common'
import { wsFeedActionCreator } from '../action-creators/ws-feed'
import { FeedResponse } from '../types/api'

export const wsMiddleware = (wsUrl: string): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, GlobalState>) => {
    let socket: WebSocket | null = null

    return next => (action: ApplicationActions) => {
      const { dispatch } = store

      if (action.type === WSFeedActionType.ConnectionStart) {
        socket = new WebSocket(wsUrl)
      }

      if (socket && action.type === WSFeedActionType.Disconnect) {
        socket.close()
        socket = null
      }

      if (socket) {
        socket.onopen = event => {
          dispatch(wsFeedActionCreator.connectionSuccess())
        }

        socket.onerror = event => {
          dispatch(wsFeedActionCreator.connectionError(event))
        }

        socket.onmessage = (event: MessageEvent) => {
          const { data } = event
          const parsedData: FeedResponse = JSON.parse(data)
          dispatch(wsFeedActionCreator.getMessage(parsedData))
        }

        socket.onclose = event => {
          dispatch(wsFeedActionCreator.connectionClosed())
        }
      }

      next(action)
    }
  }
}
