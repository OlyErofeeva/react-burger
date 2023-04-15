import { WSFeedActionType } from '../action-types/ws-action-types'
import { FeedResponse } from './api'

export type WSFeedState = {
  feed: FeedResponse | null
  wsConnected: boolean
  error?: Event
}

export type ConnectionStartWSFeedAction = {
  readonly type: WSFeedActionType.ConnectionStart
}

export type ConnectionSuccessWSFeedAction = {
  readonly type: WSFeedActionType.ConnectionSuccess
}

export type ConnectionErrorWSFeedAction = {
  readonly type: WSFeedActionType.ConnectionError
  readonly payload: Event
}

export type ConnectionClosedWSFeedAction = {
  readonly type: WSFeedActionType.ConnectionClosed
}

export type GetMessageWSFeedAction = {
  readonly type: WSFeedActionType.GetMessage
  readonly payload: FeedResponse
}

export type SendMessageWSFeedAction = {
  readonly type: WSFeedActionType.SendMessage
}

export type DisconnectWSFeedAction = {
  readonly type: WSFeedActionType.Disconnect
}

export type WSFeedAction =
  | ConnectionStartWSFeedAction
  | ConnectionSuccessWSFeedAction
  | ConnectionErrorWSFeedAction
  | ConnectionClosedWSFeedAction
  | GetMessageWSFeedAction
  | SendMessageWSFeedAction
  | DisconnectWSFeedAction