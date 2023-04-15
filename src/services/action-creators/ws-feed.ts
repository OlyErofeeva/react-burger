import { WSFeedActionType } from '../action-types/ws-action-types'
import { FeedResponse } from '../types/api'
import {
  ConnectionClosedWSFeedAction,
  ConnectionErrorWSFeedAction,
  ConnectionStartWSFeedAction,
  ConnectionSuccessWSFeedAction,
  DisconnectWSFeedAction,
  GetMessageWSFeedAction,
  SendMessageWSFeedAction,
} from '../types/ws-feed'

export const wsFeedActionCreator = {
  connectionStart: (): ConnectionStartWSFeedAction => ({
    type: WSFeedActionType.ConnectionStart,
  }),
  connectionSuccess: (): ConnectionSuccessWSFeedAction => ({
    type: WSFeedActionType.ConnectionSuccess,
  }),
  connectionError: (payload: Event): ConnectionErrorWSFeedAction => ({
    type: WSFeedActionType.ConnectionError,
    payload: payload,
  }),
  connectionClosed: (): ConnectionClosedWSFeedAction => ({
    type: WSFeedActionType.ConnectionClosed,
  }),
  getMessage: (payload: FeedResponse): GetMessageWSFeedAction => ({
    type: WSFeedActionType.GetMessage,
    payload: payload,
  }),
  sendMessage: (): SendMessageWSFeedAction => ({
    type: WSFeedActionType.SendMessage,
  }),
  disconnect: (): DisconnectWSFeedAction => ({
    type: WSFeedActionType.Disconnect,
  }),
}
