export enum IngredientsActionType {
  FetchRequest = 'INGREDIENTS_FETCH_REQUEST',
  FetchSuccess = 'INGREDIENTS_FETCH_SUCCESS',
  FetchError = 'INGREDIENTS_FETCH_ERROR',
}

export enum ConstructorActionType {
  SetIngredients = 'SET_CONSTRUCTOR_INGREDIENTS',
  RemoveIngredient = 'REMOVE_CONSTRUCTOR_INGREDIENT',
}

export enum ActiveModalIngredientActionType {
  SetIngredient = 'SET_ACTIVE_MODAL_INGREDIENT',
  ClearIngredient = 'CLEAR_ACTIVE_MODAL_INGREDIENT',
}

export enum OrderActionType {
  PlaceRequest = 'PLACE_ORDER_REQUEST',
  PlaceSuccess = 'PLACE_ORDER_SUCCESS',
  PlaceError = 'PLACE_ORDER_ERROR',
}

export enum UserActionType {
  RegisterRequest = 'USER_REGISTER_REQUEST',
  RegisterSuccess = 'USER_REGISTER_SUCCESS',
  RegisterError = 'USER_REGISTER_ERROR',
  RegisterClearProgress = 'USER_REGISTER_CLEAR_PROGRESS',

  LoginRequest = 'USER_LOGIN_REQUEST',
  LoginSuccess = 'USER_LOGIN_SUCCESS',
  LoginError = 'USER_LOGIN_ERROR',
  LoginClearProgress = 'USER_LOGIN_CLEAR_PROGRESS',

  ForgotPasswordRequest = 'USER_FORGOT_PASSWORD_REQUEST',
  ForgotPasswordSuccess = 'USER_FORGOT_PASSWORD_SUCCESS',
  ForgotPasswordError = 'USER_FORGOT_PASSWORD_ERROR',
  ForgotPasswordClearProgress = 'USER_FORGOT_PASSWORD_CLEAR_PROGRESS',

  ResetPasswordRequest = 'USER_RESET_PASSWORD_REQUEST',
  ResetPasswordSuccess = 'USER_RESET_PASSWORD_SUCCESS',
  ResetPasswordError = 'USER_RESET_PASSWORD_ERROR',
  ResetPasswordClearProgress = 'USER_RESET_PASSWORD_CLEAR_PROGRESS',

  RefreshTokenRequest = 'USER_REFRESH_TOKEN_REQUEST',
  RefreshTokenSuccess = 'USER_REFRESH_TOKEN_SUCCESS',
  RefreshTokenError = 'USER_REFRESH_TOKEN_ERROR',

  LogoutRequest = 'USER_LOGOUT_REQUEST',
  LogoutSuccess = 'USER_LOGOUT_SUCCESS',
  LogoutError = 'USER_LOGOUT_ERROR',

  GetProfileRequest = 'USER_GET_PROFILE_REQUEST',
  GetProfileSuccess = 'USER_GET_PROFILE_SUCCESS',
  GetProfileError = 'USER_GET_PROFILE_ERROR',

  EditProfileRequest = 'USER_EDIT_PROFILE_REQUEST',
  EditProfileSuccess = 'USER_EDIT_PROFILE_SUCCESS',
  EditProfileError = 'USER_EDIT_PROFILE_ERROR',
}
