import { ActionType } from '../action-types/action-types'
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

export type UserAction =
  | { type: ActionType.UserRegisterRequest }
  | { type: ActionType.UserRegisterSuccess; payload: User }
  | { type: ActionType.UserRegisterError }
  | { type: ActionType.UserRegisterClearProgress }
  | { type: ActionType.UserLoginRequest }
  | { type: ActionType.UserLoginSuccess; payload: User }
  | { type: ActionType.UserLoginError }
  | { type: ActionType.UserLoginClearProgress }
  | { type: ActionType.UserForgotPasswordRequest }
  | { type: ActionType.UserForgotPasswordSuccess }
  | { type: ActionType.UserForgotPasswordError }
  | { type: ActionType.UserForgotPasswordClearProgress }
  | { type: ActionType.UserResetPasswordRequest }
  | { type: ActionType.UserResetPasswordSuccess }
  | { type: ActionType.UserResetPasswordError }
  | { type: ActionType.UserResetPasswordClearProgress }
  | { type: ActionType.UserRefreshTokenRequest }
  | { type: ActionType.UserRefreshTokenSuccess }
  | { type: ActionType.UserRefreshTokenError }
  | { type: ActionType.UserLogoutRequest }
  | { type: ActionType.UserLogoutSuccess }
  | { type: ActionType.UserLogoutError }
  | { type: ActionType.UserGetProfileRequest }
  | { type: ActionType.UserGetProfileSuccess; payload: User }
  | { type: ActionType.UserGetProfileError }
  | { type: ActionType.UserEditProfileRequest }
  | { type: ActionType.UserEditProfileSuccess; payload: User }
  | { type: ActionType.UserEditProfileError }
