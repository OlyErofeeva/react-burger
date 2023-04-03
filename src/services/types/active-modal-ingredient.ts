import { ActionType } from '../action-types/action-types'
import { Ingredient } from './ingredient'

export type ActiveModalIngredientState = {
  item: Ingredient | null
}

export type ActiveModalIngredientAction =
  | {
      type: ActionType.SetActiveModalIngredient
      payload: Ingredient
    }
  | {
      type: ActionType.ClearActiveModalIngredient
    }
