import { Ingredient } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

export const activeModalIngredientActionCreator = {
  set: (payload: Ingredient) => ({
    type: ActionType.SetActiveModalIngredient,
    payload: payload,
  }),
  clear: () => ({
    type: ActionType.ClearActiveModalIngredient,
  }),
}
