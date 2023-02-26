import { Ingredient } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

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
