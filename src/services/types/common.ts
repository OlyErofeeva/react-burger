import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { ActiveModalIngredientAction, ActiveModalIngredientState } from './active-modal-ingredient'
import { ConstructorAction, ConstructorState } from './constructor'
import { IngredientAction, IngredientState } from './ingredient'
import { OrderAction, OrderState } from './order'
import { UserAction, UserState } from './user'

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

type ApplicationActions = ActiveModalIngredientAction | ConstructorAction | IngredientAction | OrderAction | UserAction

export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, Action, GlobalState, ApplicationActions>
export type AppDispatch = ThunkDispatch<Action, GlobalState, ApplicationActions>
