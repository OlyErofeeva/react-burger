import { ActiveModalIngredientActionType } from '../action-types/action-types'
import { Ingredient } from './ingredient'

export type ActiveModalIngredientState = {
  item: Ingredient | null
}

export type SetActiveModalIngredientAction = {
  readonly type: ActiveModalIngredientActionType.SetIngredient
  readonly payload: Ingredient
}

export type ClearActiveModalIngredientAction = {
  readonly type: ActiveModalIngredientActionType.ClearIngredient
}

export type ActiveModalIngredientAction = SetActiveModalIngredientAction | ClearActiveModalIngredientAction
