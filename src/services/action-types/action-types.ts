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

  UserRegisterRequest = 'USER_REGISTER_REQUEST',
  UserRegisterSuccess = 'USER_REGISTER_SUCCESS',
  UserRegisterError = 'USER_REGISTER_ERROR',

  UserLoginRequest = 'USER_LOGIN_REQUEST',
  UserLoginSuccess = 'USER_LOGIN_SUCCESS',
  UserLoginError = 'USER_LOGIN_ERROR',

  UserForgotPasswordRequest = 'USER_FORGOT_PASSWORD_REQUEST',
  UserForgotPasswordSuccess = 'USER_FORGOT_PASSWORD_SUCCESS',
  UserForgotPasswordError = 'USER_FORGOT_PASSWORD_ERROR',

  UserResetPasswordRequest = 'USER_RESET_PASSWORD_REQUEST',
  UserResetPasswordSuccess = 'USER_RESET_PASSWORD_SUCCESS',
  UserResetPasswordError = 'USER_RESET_PASSWORD_ERROR',

  UserRefreshTokenRequest = 'USER_REFRESH_TOKEN_REQUEST',
  UserRefreshTokenSuccess = 'USER_REFRESH_TOKEN_SUCCESS',
  UserRefreshTokenError = 'USER_REFRESH_TOKEN_ERROR',

  UserLogoutRequest = 'USER_LOGOUT_REQUEST',
  UserLogoutSuccess = 'USER_LOGOUT_SUCCESS',
  UserLogoutError = 'USER_LOGOUT_ERROR',

  UserGetProfileRequest = 'USER_GET_PROFILE_REQUEST',
  UserGetProfileSuccess = 'USER_GET_PROFILE_SUCCESS',
  UserGetProfileError = 'USER_GET_PROFILE_ERROR',

  UserEditProfileRequest = 'USER_EDIT_PROFILE_REQUEST',
  UserEditProfileSuccess = 'USER_EDIT_PROFILE_SUCCESS',
  UserEditProfileError = 'USER_EDIT_PROFILE_ERROR',
}
