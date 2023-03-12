import { User } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

export const userActionCreator = {
  userRegisterRequest: () => ({
    type: ActionType.UserRegisterRequest,
  }),
  userRegisterSuccess: (payload: User) => ({
    type: ActionType.UserRegisterSuccess,
    payload: payload,
  }),
  userRegisterError: () => ({
    type: ActionType.UserRegisterError,
  }),

  userLoginRequest: () => ({
    type: ActionType.UserLoginRequest,
  }),
  userLoginSuccess: (payload: User) => ({
    type: ActionType.UserLoginSuccess,
    payload: payload,
  }),
  userLoginError: () => ({
    type: ActionType.UserLoginError,
  }),

  userForgotPasswordRequest: () => ({
    type: ActionType.UserForgotPasswordRequest,
  }),
  userForgotPasswordSuccess: () => ({
    type: ActionType.UserForgotPasswordSuccess,
  }),
  userForgotPasswordError: () => ({
    type: ActionType.UserForgotPasswordError,
  }),

  userResetPasswordRequest: () => ({
    type: ActionType.UserResetPasswordRequest,
  }),
  userResetPasswordSuccess: () => ({
    type: ActionType.UserResetPasswordSuccess,
  }),
  userResetPasswordError: () => ({
    type: ActionType.UserResetPasswordError,
  }),

  userRefreshTokenRequest: () => ({
    type: ActionType.UserRefreshTokenRequest,
  }),
  userRefreshTokenSuccess: () => ({
    type: ActionType.UserRefreshTokenSuccess,
  }),
  userRefreshTokenError: () => ({
    type: ActionType.UserRefreshTokenError,
  }),

  userLogoutRequest: () => ({
    type: ActionType.UserLogoutRequest,
  }),
  userLogoutSuccess: () => ({
    type: ActionType.UserLogoutSuccess,
  }),
  userLogoutError: () => ({
    type: ActionType.UserLogoutError,
  }),
}