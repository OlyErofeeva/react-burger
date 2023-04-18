import { ActiveModalIngredientActionType } from '../action-types/action-types'
import { ClearActiveModalIngredientAction, SetActiveModalIngredientAction } from '../types/active-modal-ingredient'
import { Ingredient } from '../types/ingredient'

export const activeModalIngredientActionCreator = {
  set: (payload: Ingredient): SetActiveModalIngredientAction => ({
    type: ActiveModalIngredientActionType.SetIngredient,
    payload: payload,
  }),
  clear: (): ClearActiveModalIngredientAction => ({
    type: ActiveModalIngredientActionType.ClearIngredient,
  }),
}
