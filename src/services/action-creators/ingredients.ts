import { IngredientsActionType } from '../action-types/action-types'
import {
  Ingredient,
  IngredientsFetchErrorAction,
  IngredientsFetchRequestAction,
  IngredientsFetchSuccessAction,
} from '../types/ingredient'

export const ingredientsActionCreator = {
  fetchRequest: (): IngredientsFetchRequestAction => ({
    type: IngredientsActionType.FetchRequest,
  }),
  fetchSuccess: (payload: Ingredient[]): IngredientsFetchSuccessAction => ({
    type: IngredientsActionType.FetchSuccess,
    payload: payload,
  }),
  fetchError: (): IngredientsFetchErrorAction => ({
    type: IngredientsActionType.FetchError,
  }),
}
