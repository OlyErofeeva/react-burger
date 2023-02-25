export enum ActionType {
  IngredientsFetchRequest = 'INGREDIENTS_FETCH_REQUEST',
  IngredientsFetchSuccess = 'INGREDIENTS_FETCH_SUCCESS',
  IngredientsFetchError = 'INGREDIENTS_FETCH_ERROR',

  SetConstructorIngredients = 'SET_CONSTRUCTOR_INGREDIENTS',
  RemoveConstructorIngredient = 'REMOVE_CONSTRUCTOR_INGREDIENT',

  SetActiveModalIngredient = 'SET_ACTIVE_MODAL_INGREDIENT',
  ClearActiveModalIngredient = 'CLEAR_ACTIVE_MODAL_INGREDIENT',

  PlaceOrderRequest = 'PLACE_ORDER_REQUEST',
  PlaceOrderSuccess = 'PLACE_ORDER_SUCCESS',
  PlaceOrderError = 'PLACE_ORDER_ERROR',
}
