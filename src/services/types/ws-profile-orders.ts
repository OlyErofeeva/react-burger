import { WSProfileOrdersActionType } from '../action-types/ws-action-types'
import { FeedOrder, ProfileOrdersResponse } from './api'

export type WSProfileOrdersState = {
  items: FeedOrder[]
  wsConnected: boolean
  error?: Event
}

export type ConnectionStartWSProfileOrdersAction = {
  readonly type: WSProfileOrdersActionType.ConnectionStart
  readonly payload: string
}

export type ConnectionSuccessWSProfileOrdersAction = {
  readonly type: WSProfileOrdersActionType.ConnectionSuccess
}

export type ConnectionErrorWSProfileOrdersAction = {
  readonly type: WSProfileOrdersActionType.ConnectionError
  readonly payload: Event
}

export type ConnectionClosedWSProfileOrdersAction = {
  readonly type: WSProfileOrdersActionType.ConnectionClosed
}

export type GetMessageWSProfileOrdersAction = {
  readonly type: WSProfileOrdersActionType.GetMessage
  readonly payload: ProfileOrdersResponse
}

export type SendMessageWSProfileOrdersAction = {
  readonly type: WSProfileOrdersActionType.SendMessage
}

export type DisconnectWSProfileOrdersAction = {
  readonly type: WSProfileOrdersActionType.Disconnect
}

export type WSProfileOrdersAction =
  | ConnectionStartWSProfileOrdersAction
  | ConnectionSuccessWSProfileOrdersAction
  | ConnectionErrorWSProfileOrdersAction
  | ConnectionClosedWSProfileOrdersAction
  | GetMessageWSProfileOrdersAction
  | SendMessageWSProfileOrdersAction
  | DisconnectWSProfileOrdersAction
