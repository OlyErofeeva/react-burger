import { ActionType } from '../action-types/action-types'
import { User } from '../types/user'

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
  userRegisterClearProgress: () => ({
    type: ActionType.UserRegisterClearProgress,
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
  userLoginClearProgress: () => ({
    type: ActionType.UserLoginClearProgress,
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
  userForgotPasswordClearProgress: () => ({
    type: ActionType.UserForgotPasswordClearProgress,
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
  userResetPasswordClearProgress: () => ({
    type: ActionType.UserResetPasswordClearProgress,
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

  userGetProfileRequest: () => ({
    type: ActionType.UserGetProfileRequest,
  }),
  userGetProfileSuccess: (payload: User) => ({
    type: ActionType.UserGetProfileSuccess,
    payload: payload,
  }),
  userGetProfileError: () => ({
    type: ActionType.UserGetProfileError,
  }),

  userEditProfileRequest: () => ({
    type: ActionType.UserEditProfileRequest,
  }),
  userEditProfileSuccess: (payload: User) => ({
    type: ActionType.UserEditProfileSuccess,
    payload: payload,
  }),
  userEditProfileError: () => ({
    type: ActionType.UserEditProfileError,
  }),
}
