import { ActionType } from '../action-types/action-types'
import { Progress } from './common'

export type Order = {
  name: string
  number: number
}

export type OrderState = {
  item: Order | null
  itemAddProgress: Progress
}

export type OrderAction =
  | {
      type: ActionType.PlaceOrderRequest
    }
  | {
      type: ActionType.PlaceOrderSuccess
      payload: Order
    }
  | {
      type: ActionType.PlaceOrderError
    }
