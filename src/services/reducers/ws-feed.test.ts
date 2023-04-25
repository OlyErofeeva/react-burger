import { wsFeedActionCreator } from '../action-creators/ws-feed'
import { OrderStatus } from '../types/api'
import { initialState as WSFeedInitialState, wsFeedReducer } from './ws-feed'

const testError = new Event('error')
const testFeed = {
  success: true,
  orders: [
    {
      createdAt: '2023-04-25T13:24:17.186Z',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa0943',
        '643d69a5c3f7b9001cfa093d',
      ],
      name: 'Space флюоресцентный бургер',
      number: 1460,
      status: OrderStatus.Done,
      updatedAt: '2023-04-25T13:24:17.257Z',
      _id: '6447d48145c6f2001be6d8c5',
    },
    {
      createdAt: '2023-04-25T12:59:17.650Z',
      ingredients: [
        '643d69a5c3f7b9001cfa093d',
        '643d69a5c3f7b9001cfa0942',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa0940',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0948',
        '643d69a5c3f7b9001cfa093d',
      ],
      name: 'Бессмертный spicy флюоресцентный фалленианский альфа-сахаридный метеоритный бургер',
      number: 1459,
      status: OrderStatus.Done,
      updatedAt: '2023-04-25T12:59:17.682Z',
      _id: '6447cea545c6f2001be6d8b7',
    },
  ],
  total: 4242,
  totalToday: 42,
}

describe('ws-feed reducer', () => {
  it('should return the initial state', () => {
    expect(wsFeedReducer(undefined, {} as any)).toEqual(WSFeedInitialState)
  })

  it('should handle ConnectionSuccess', () => {
    expect(wsFeedReducer(undefined, wsFeedActionCreator.connectionSuccess())).toEqual({
      ...WSFeedInitialState,
      wsConnected: true,
    })
  })

  it('should handle ConnectionError', () => {
    expect(
      wsFeedReducer({ ...WSFeedInitialState, wsConnected: true }, wsFeedActionCreator.connectionError(testError)),
    ).toEqual({
      ...WSFeedInitialState,
      wsConnected: false,
      error: testError,
    })
  })

  it('should handle ConnectionClosed', () => {
    expect(
      wsFeedReducer(
        { ...WSFeedInitialState, error: testError, wsConnected: true },
        wsFeedActionCreator.connectionClosed(),
      ),
    ).toEqual({
      ...WSFeedInitialState,
      error: undefined,
      wsConnected: false,
    })
  })

  it('should handle GetMessage', () => {
    expect(
      wsFeedReducer({ ...WSFeedInitialState, wsConnected: true }, wsFeedActionCreator.getMessage(testFeed)),
    ).toEqual({
      feed: testFeed,
      wsConnected: true,
      error: undefined,
    })
  })
})
