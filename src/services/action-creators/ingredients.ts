import { ActionType } from '../action-types/action-types'
import { Ingredient } from '../types/ingredient'

export const ingredientsActionCreator = {
  fetchRequest: () => ({
    type: ActionType.IngredientsFetchRequest,
  }),
  fetchSuccess: (payload: Ingredient[]) => ({
    type: ActionType.IngredientsFetchSuccess,
    payload: payload,
  }),
  fetchError: () => ({
    type: ActionType.IngredientsFetchError,
  }),
}
