import { ActionType } from '../action-types/action-types'
import { Ingredient } from '../types/ingredient'

export const activeModalIngredientActionCreator = {
  set: (payload: Ingredient) => ({
    type: ActionType.SetActiveModalIngredient,
    payload: payload,
  }),
  clear: () => ({
    type: ActionType.ClearActiveModalIngredient,
  }),
}
