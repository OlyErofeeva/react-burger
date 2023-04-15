import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { ActiveModalIngredientAction, ActiveModalIngredientState } from './active-modal-ingredient'
import { ConstructorAction, ConstructorState } from './constructor'
import { IngredientAction, IngredientState } from './ingredient'
import { OrderAction, OrderState } from './order'
import { UserAction, UserState } from './user'
import { WSFeedAction, WSFeedState } from './ws-feed'

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
  wsFeed: WSFeedState
}

export type ApplicationActions =
  | ActiveModalIngredientAction
  | ConstructorAction
  | IngredientAction
  | OrderAction
  | UserAction
  | WSFeedAction

export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, Action, GlobalState, ApplicationActions>
export type AppDispatch = ThunkDispatch<Action, GlobalState, ApplicationActions>
