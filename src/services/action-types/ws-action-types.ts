export enum WSFeedActionType {
  ConnectionStart = 'WS_FEED_CONNECTION_START',
  ConnectionSuccess = 'WS_FEED_CONNECTION_SUCCESS',
  ConnectionError = 'WS_FEED_CONNECTION_ERROR',
  ConnectionClosed = 'WS_FEED_CONNECTION_CLOSED',
  GetMessage = 'WS_FEED_GET_MESSAGE',
  SendMessage = 'WS_FEED_SEND_MESSAGE',
  Disconnect = 'WS_FEED_DISCONNECT',
}
