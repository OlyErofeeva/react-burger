import { orderActionCreator } from '../action-creators'
import { Progress } from '../types/common'
import { initialState as OrderInitialState, orderReducer } from './order'

const testOrder = {
  name: 'Космический бургер',
  number: 1234,
}

describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, {} as any)).toEqual(OrderInitialState)
  })

  it('should handle PlaceRequest', () => {
    expect(orderReducer(undefined, orderActionCreator.placeOrderRequest())).toEqual({
      item: null,
      itemAddProgress: Progress.WORK,
    })
  })

  it('should handle PlaceSuccess', () => {
    expect(
      orderReducer({ item: null, itemAddProgress: Progress.WORK }, orderActionCreator.placeOrderSuccess(testOrder)),
    ).toEqual({
      item: testOrder,
      itemAddProgress: Progress.SUCCESS,
    })
  })

  it('should handle PlaceError', () => {
    expect(
      orderReducer({ item: testOrder, itemAddProgress: Progress.WORK }, orderActionCreator.placeOrderError()),
    ).toEqual({
      item: OrderInitialState.item,
      itemAddProgress: Progress.ERROR,
    })
  })
})
