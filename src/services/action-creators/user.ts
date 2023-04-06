import { UserActionType } from '../action-types/action-types'
import {
  User,
  UserEditProfileErrorAction,
  UserEditProfileRequestAction,
  UserEditProfileSuccessAction,
  UserForgotPasswordClearProgressAction,
  UserForgotPasswordErrorAction,
  UserForgotPasswordRequestAction,
  UserForgotPasswordSuccessAction,
  UserGetProfileErrorAction,
  UserGetProfileRequestAction,
  UserGetProfileSuccessAction,
  UserLoginClearProgressAction,
  UserLoginErrorAction,
  UserLoginRequestAction,
  UserLoginSuccessAction,
  UserLogoutErrorAction,
  UserLogoutRequestAction,
  UserLogoutSuccessAction,
  UserRefreshTokenErrorAction,
  UserRefreshTokenRequestAction,
  UserRefreshTokenSuccessAction,
  UserRegisterClearProgressAction,
  UserRegisterErrorAction,
  UserRegisterRequestAction,
  UserRegisterSuccessAction,
  UserResetPasswordClearProgressAction,
  UserResetPasswordErrorAction,
  UserResetPasswordRequestAction,
  UserResetPasswordSuccessAction,
} from '../types/user'

export const userActionCreator = {
  userRegisterRequest: (): UserRegisterRequestAction => ({
    type: UserActionType.RegisterRequest,
  }),
  userRegisterSuccess: (payload: User): UserRegisterSuccessAction => ({
    type: UserActionType.RegisterSuccess,
    payload: payload,
  }),
  userRegisterError: (): UserRegisterErrorAction => ({
    type: UserActionType.RegisterError,
  }),
  userRegisterClearProgress: (): UserRegisterClearProgressAction => ({
    type: UserActionType.RegisterClearProgress,
  }),

  userLoginRequest: (): UserLoginRequestAction => ({
    type: UserActionType.LoginRequest,
  }),
  userLoginSuccess: (payload: User): UserLoginSuccessAction => ({
    type: UserActionType.LoginSuccess,
    payload: payload,
  }),
  userLoginError: (): UserLoginErrorAction => ({
    type: UserActionType.LoginError,
  }),
  userLoginClearProgress: (): UserLoginClearProgressAction => ({
    type: UserActionType.LoginClearProgress,
  }),

  userForgotPasswordRequest: (): UserForgotPasswordRequestAction => ({
    type: UserActionType.ForgotPasswordRequest,
  }),
  userForgotPasswordSuccess: (): UserForgotPasswordSuccessAction => ({
    type: UserActionType.ForgotPasswordSuccess,
  }),
  userForgotPasswordError: (): UserForgotPasswordErrorAction => ({
    type: UserActionType.ForgotPasswordError,
  }),
  userForgotPasswordClearProgress: (): UserForgotPasswordClearProgressAction => ({
    type: UserActionType.ForgotPasswordClearProgress,
  }),

  userResetPasswordRequest: (): UserResetPasswordRequestAction => ({
    type: UserActionType.ResetPasswordRequest,
  }),
  userResetPasswordSuccess: (): UserResetPasswordSuccessAction => ({
    type: UserActionType.ResetPasswordSuccess,
  }),
  userResetPasswordError: (): UserResetPasswordErrorAction => ({
    type: UserActionType.ResetPasswordError,
  }),
  userResetPasswordClearProgress: (): UserResetPasswordClearProgressAction => ({
    type: UserActionType.ResetPasswordClearProgress,
  }),

  userRefreshTokenRequest: (): UserRefreshTokenRequestAction => ({
    type: UserActionType.RefreshTokenRequest,
  }),
  userRefreshTokenSuccess: (): UserRefreshTokenSuccessAction => ({
    type: UserActionType.RefreshTokenSuccess,
  }),
  userRefreshTokenError: (): UserRefreshTokenErrorAction => ({
    type: UserActionType.RefreshTokenError,
  }),

  userLogoutRequest: (): UserLogoutRequestAction => ({
    type: UserActionType.LogoutRequest,
  }),
  userLogoutSuccess: (): UserLogoutSuccessAction => ({
    type: UserActionType.LogoutSuccess,
  }),
  userLogoutError: (): UserLogoutErrorAction => ({
    type: UserActionType.LogoutError,
  }),

  userGetProfileRequest: (): UserGetProfileRequestAction => ({
    type: UserActionType.GetProfileRequest,
  }),
  userGetProfileSuccess: (payload: User): UserGetProfileSuccessAction => ({
    type: UserActionType.GetProfileSuccess,
    payload: payload,
  }),
  userGetProfileError: (): UserGetProfileErrorAction => ({
    type: UserActionType.GetProfileError,
  }),

  userEditProfileRequest: (): UserEditProfileRequestAction => ({
    type: UserActionType.EditProfileRequest,
  }),
  userEditProfileSuccess: (payload: User): UserEditProfileSuccessAction => ({
    type: UserActionType.EditProfileSuccess,
    payload: payload,
  }),
  userEditProfileError: (): UserEditProfileErrorAction => ({
    type: UserActionType.EditProfileError,
  }),
}
