import { UserActionType } from '../action-types/action-types'
import { Progress } from './common'

export type User = {
  name: string
  email: string
}

export type UserState = {
  user: User | null
  registrationProgress: Progress
  loginProgress: Progress
  forgotPasswordProgress: Progress
  resetPasswordProgress: Progress
  refreshTokenProgress: Progress
  logoutProgress: Progress
  getProfileProgress: Progress
  editProfileProgress: Progress
}

export type UserRegisterRequestAction = { readonly type: UserActionType.RegisterRequest }
export type UserRegisterSuccessAction = { readonly type: UserActionType.RegisterSuccess; readonly payload: User }
export type UserRegisterErrorAction = { readonly type: UserActionType.RegisterError }
export type UserRegisterClearProgressAction = { readonly type: UserActionType.RegisterClearProgress }
export type UserLoginRequestAction = { readonly type: UserActionType.LoginRequest }
export type UserLoginSuccessAction = { readonly type: UserActionType.LoginSuccess; readonly payload: User }
export type UserLoginErrorAction = { readonly type: UserActionType.LoginError }
export type UserLoginClearProgressAction = { readonly type: UserActionType.LoginClearProgress }
export type UserForgotPasswordRequestAction = { readonly type: UserActionType.ForgotPasswordRequest }
export type UserForgotPasswordSuccessAction = { readonly type: UserActionType.ForgotPasswordSuccess }
export type UserForgotPasswordErrorAction = { readonly type: UserActionType.ForgotPasswordError }
export type UserForgotPasswordClearProgressAction = { readonly type: UserActionType.ForgotPasswordClearProgress }
export type UserResetPasswordRequestAction = { readonly type: UserActionType.ResetPasswordRequest }
export type UserResetPasswordSuccessAction = { readonly type: UserActionType.ResetPasswordSuccess }
export type UserResetPasswordErrorAction = { readonly type: UserActionType.ResetPasswordError }
export type UserResetPasswordClearProgressAction = { readonly type: UserActionType.ResetPasswordClearProgress }
export type UserRefreshTokenRequestAction = { readonly type: UserActionType.RefreshTokenRequest }
export type UserRefreshTokenSuccessAction = { readonly type: UserActionType.RefreshTokenSuccess }
export type UserRefreshTokenErrorAction = { readonly type: UserActionType.RefreshTokenError }
export type UserLogoutRequestAction = { readonly type: UserActionType.LogoutRequest }
export type UserLogoutSuccessAction = { readonly type: UserActionType.LogoutSuccess }
export type UserLogoutErrorAction = { readonly type: UserActionType.LogoutError }
export type UserGetProfileRequestAction = { readonly type: UserActionType.GetProfileRequest }
export type UserGetProfileSuccessAction = { readonly type: UserActionType.GetProfileSuccess; readonly payload: User }
export type UserGetProfileErrorAction = { readonly type: UserActionType.GetProfileError }
export type UserEditProfileRequestAction = { readonly type: UserActionType.EditProfileRequest }
export type UserEditProfileSuccessAction = { readonly type: UserActionType.EditProfileSuccess; readonly payload: User }
export type UserEditProfileErrorAction = { readonly type: UserActionType.EditProfileError }

export type UserAction =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterErrorAction
  | UserRegisterClearProgressAction
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
  | UserLoginClearProgressAction
  | UserForgotPasswordRequestAction
  | UserForgotPasswordSuccessAction
  | UserForgotPasswordErrorAction
  | UserForgotPasswordClearProgressAction
  | UserResetPasswordRequestAction
  | UserResetPasswordSuccessAction
  | UserResetPasswordErrorAction
  | UserResetPasswordClearProgressAction
  | UserRefreshTokenRequestAction
  | UserRefreshTokenSuccessAction
  | UserRefreshTokenErrorAction
  | UserLogoutRequestAction
  | UserLogoutSuccessAction
  | UserLogoutErrorAction
  | UserGetProfileRequestAction
  | UserGetProfileSuccessAction
  | UserGetProfileErrorAction
  | UserEditProfileRequestAction
  | UserEditProfileSuccessAction
  | UserEditProfileErrorAction
