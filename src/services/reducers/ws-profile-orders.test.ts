import { wsProfileOrdersActionCreator } from '../action-creators/ws-profile-orders'
import { OrderStatus } from '../types/api'
import { initialState, wsProfileOrdersReducer } from './ws-profile-orders'

const testError = new Event('error')
const testProfileOrders = [
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
]
const testWSMessage = {
  success: true,
  orders: testProfileOrders,
  total: 4242,
  totalToday: 42,
}

describe('ws-profile-orders reducer', () => {
  it('should return the initial state', () => {
    expect(wsProfileOrdersReducer(undefined, {} as any)).toEqual(initialState)
  })

  it('should handle ConnectionSuccess', () => {
    expect(wsProfileOrdersReducer(undefined, wsProfileOrdersActionCreator.connectionSuccess())).toEqual({
      ...initialState,
      wsConnected: true,
    })
  })

  it('should handle ConnectionError', () => {
    expect(
      wsProfileOrdersReducer(
        { ...initialState, wsConnected: true },
        wsProfileOrdersActionCreator.connectionError(testError),
      ),
    ).toEqual({
      ...initialState,
      wsConnected: false,
      error: testError,
    })
  })

  it('should handle ConnectionClosed', () => {
    expect(
      wsProfileOrdersReducer(
        { ...initialState, error: testError, wsConnected: true },
        wsProfileOrdersActionCreator.connectionClosed(),
      ),
    ).toEqual({
      ...initialState,
      error: undefined,
      wsConnected: false,
    })
  })

  it('should handle GetMessage', () => {
    expect(
      wsProfileOrdersReducer(
        { ...initialState, wsConnected: true },
        wsProfileOrdersActionCreator.getMessage(testWSMessage),
      ),
    ).toEqual({
      items: testProfileOrders,
      wsConnected: true,
      error: undefined,
    })
  })
})
