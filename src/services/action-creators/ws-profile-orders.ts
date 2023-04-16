import { WSProfileOrdersActionType } from '../action-types/ws-action-types'
import { ProfileOrdersResponse } from '../types/api'
import {
  ConnectionClosedWSProfileOrdersAction,
  ConnectionErrorWSProfileOrdersAction,
  ConnectionStartWSProfileOrdersAction,
  ConnectionSuccessWSProfileOrdersAction,
  DisconnectWSProfileOrdersAction,
  GetMessageWSProfileOrdersAction,
  SendMessageWSProfileOrdersAction,
} from '../types/ws-profile-orders'

export const wsProfileOrdersActionCreator = {
  connectionStart: (payload: string): ConnectionStartWSProfileOrdersAction => ({
    type: WSProfileOrdersActionType.ConnectionStart,
    payload: payload,
  }),
  connectionSuccess: (): ConnectionSuccessWSProfileOrdersAction => ({
    type: WSProfileOrdersActionType.ConnectionSuccess,
  }),
  connectionError: (payload: Event): ConnectionErrorWSProfileOrdersAction => ({
    type: WSProfileOrdersActionType.ConnectionError,
    payload: payload,
  }),
  connectionClosed: (): ConnectionClosedWSProfileOrdersAction => ({
    type: WSProfileOrdersActionType.ConnectionClosed,
  }),
  getMessage: (payload: ProfileOrdersResponse): GetMessageWSProfileOrdersAction => ({
    type: WSProfileOrdersActionType.GetMessage,
    payload: payload,
  }),
  sendMessage: (): SendMessageWSProfileOrdersAction => ({
    type: WSProfileOrdersActionType.SendMessage,
  }),
  disconnect: (): DisconnectWSProfileOrdersAction => ({
    type: WSProfileOrdersActionType.Disconnect,
  }),
}
