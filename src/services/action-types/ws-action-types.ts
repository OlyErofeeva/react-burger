export enum WSFeedActionType {
  ConnectionStart = 'WS_FEED_CONNECTION_START',
  ConnectionSuccess = 'WS_FEED_CONNECTION_SUCCESS',
  ConnectionError = 'WS_FEED_CONNECTION_ERROR',
  ConnectionClosed = 'WS_FEED_CONNECTION_CLOSED',
  GetMessage = 'WS_FEED_GET_MESSAGE',
  SendMessage = 'WS_FEED_SEND_MESSAGE',
  Disconnect = 'WS_FEED_DISCONNECT',
}

export enum WSProfileOrdersActionType {
  ConnectionStart = 'WS_PROFILE_ORDERS_CONNECTION_START',
  ConnectionSuccess = 'WS_PROFILE_ORDERS_CONNECTION_SUCCESS',
  ConnectionError = 'WS_PROFILE_ORDERS_CONNECTION_ERROR',
  ConnectionClosed = 'WS_PROFILE_ORDERS_CONNECTION_CLOSED',
  GetMessage = 'WS_PROFILE_ORDERS_GET_MESSAGE',
  SendMessage = 'WS_PROFILE_ORDERS_SEND_MESSAGE',
  Disconnect = 'WS_PROFILE_ORDERS_DISCONNECT',
}
