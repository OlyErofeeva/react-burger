import { OrderActionType } from '../action-types/action-types'
import { Progress } from './common'

export type Order = {
  name: string
  number: number
}

export type OrderState = {
  item: Order | null
  itemAddProgress: Progress
}

export type PlaceOrderRequestAction = {
  readonly type: OrderActionType.PlaceRequest
}

export type PlaceOrderSuccessAction = {
  readonly type: OrderActionType.PlaceSuccess
  readonly payload: Order
}

export type PlaceOrderErrorAction = {
  readonly type: OrderActionType.PlaceError
}

export type OrderAction = PlaceOrderRequestAction | PlaceOrderSuccessAction | PlaceOrderErrorAction
