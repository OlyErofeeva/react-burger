import { Ingredient, Order } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

export const actionCreators = {
  // ingredients
  ingredientsFetchRequest: () => ({
    type: ActionType.IngredientsFetchRequest,
  }),
  ingredientsFetchSuccess: (payload: Ingredient[]) => ({
    type: ActionType.IngredientsFetchSuccess,
    payload: payload,
  }),
  ingredientsFetchError: () => ({
    type: ActionType.IngredientsFetchError,
  }),

  // constructor
  setConstructorIngredients: (payload: Ingredient[]) => ({
    type: ActionType.SetConstructorIngredients,
    payload: payload,
  }),

  // activeModalIngredient
  setActiveModalIngredient: (payload: Ingredient) => ({
    type: ActionType.SetActiveModalIngredient,
    payload: payload,
  }),
  clearActiveModalIngredient: () => ({
    type: ActionType.ClearActiveModalIngredient,
  }),

  // order
  placeOrderRequest: () => ({
    type: ActionType.PlaceOrderRequest,
  }),
  placeOrderSuccess: (payload: Order) => ({
    type: ActionType.PlaceOrderSuccess,
    payload: payload,
  }),
  placeOrderError: () => ({
    type: ActionType.PlaceOrderError,
  }),
}
