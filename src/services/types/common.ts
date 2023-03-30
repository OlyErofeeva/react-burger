import { ActiveModalIngredientState } from './active-modal-ingredient'
import { ConstructorState } from './constructor'
import { IngredientState } from './ingredient'
import { OrderState } from './order'
import { UserState } from './user'

export enum Progress {
  IDLE = 'IDLE',
  WORK = 'WORK',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type GlobalState = {
  ingredients: IngredientState
  constructor: ConstructorState
  activeModalIngredient: ActiveModalIngredientState
  order: OrderState
  user: UserState
}
