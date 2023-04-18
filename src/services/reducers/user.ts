import { UserActionType } from '../action-types/action-types'
import { Progress } from '../types/common'
import { UserAction, UserState } from '../types/user'

export const initialState: UserState = {
  user: null,
  registrationProgress: Progress.IDLE,
  loginProgress: Progress.IDLE,
  forgotPasswordProgress: Progress.IDLE,
  resetPasswordProgress: Progress.IDLE,
  refreshTokenProgress: Progress.IDLE,
  logoutProgress: Progress.IDLE,
  getProfileProgress: Progress.IDLE,
  editProfileProgress: Progress.IDLE,
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.RegisterRequest:
      return {
        ...state,
        registrationProgress: Progress.WORK,
      }
    case UserActionType.RegisterSuccess:
      return {
        ...state,
        user: action.payload,
        registrationProgress: Progress.SUCCESS,
      }
    case UserActionType.RegisterError:
      return {
        ...initialState,
        registrationProgress: Progress.ERROR,
      }
    case UserActionType.RegisterClearProgress:
      return {
        ...state,
        registrationProgress: Progress.IDLE,
      }

    case UserActionType.LoginRequest:
      return {
        ...state,
        loginProgress: Progress.WORK,
      }
    case UserActionType.LoginSuccess:
      return {
        ...state,
        user: action.payload,
        loginProgress: Progress.SUCCESS,
      }
    case UserActionType.LoginError:
      return {
        ...initialState,
        loginProgress: Progress.ERROR,
      }
    case UserActionType.LoginClearProgress:
      return {
        ...state,
        loginProgress: Progress.IDLE,
      }

    case UserActionType.ForgotPasswordRequest:
      return {
        ...state,
        forgotPasswordProgress: Progress.WORK,
      }
    case UserActionType.ForgotPasswordSuccess:
      return {
        ...state,
        forgotPasswordProgress: Progress.SUCCESS,
      }
    case UserActionType.ForgotPasswordError:
      return {
        ...initialState,
        forgotPasswordProgress: Progress.ERROR,
      }
    case UserActionType.ForgotPasswordClearProgress:
      return {
        ...state,
        forgotPasswordProgress: Progress.IDLE,
      }

    case UserActionType.ResetPasswordRequest:
      return {
        ...state,
        resetPasswordProgress: Progress.WORK,
      }
    case UserActionType.ResetPasswordSuccess:
      return {
        ...state,
        resetPasswordProgress: Progress.SUCCESS,
      }
    case UserActionType.ResetPasswordError:
      return {
        ...initialState,
        resetPasswordProgress: Progress.ERROR,
      }
    case UserActionType.ResetPasswordClearProgress:
      return {
        ...state,
        resetPasswordProgress: Progress.IDLE,
      }

    case UserActionType.RefreshTokenRequest:
      return {
        ...state,
        refreshTokenProgress: Progress.WORK,
      }
    case UserActionType.RefreshTokenSuccess:
      return {
        ...state,
        refreshTokenProgress: Progress.SUCCESS,
      }
    case UserActionType.RefreshTokenError:
      return {
        ...initialState,
        refreshTokenProgress: Progress.ERROR,
      }

    case UserActionType.LogoutRequest:
      return {
        ...state,
        logoutProgress: Progress.WORK,
      }
    case UserActionType.LogoutSuccess:
      return {
        ...state,
        user: null,
        logoutProgress: Progress.SUCCESS,
      }
    case UserActionType.LogoutError:
      return {
        ...state,
        logoutProgress: Progress.ERROR,
      }

    case UserActionType.GetProfileRequest:
      return {
        ...state,
        getProfileProgress: Progress.WORK,
      }
    case UserActionType.GetProfileSuccess:
      return {
        ...state,
        user: action.payload,
        getProfileProgress: Progress.SUCCESS,
      }
    case UserActionType.GetProfileError:
      return {
        ...state,
        getProfileProgress: Progress.ERROR,
      }

    case UserActionType.EditProfileRequest:
      return {
        ...state,
        getProfileProgress: Progress.WORK,
      }
    case UserActionType.EditProfileSuccess:
      return {
        ...state,
        user: action.payload,
        getProfileProgress: Progress.SUCCESS,
      }
    case UserActionType.EditProfileError:
      return {
        ...state,
        getProfileProgress: Progress.ERROR,
      }
    default:
      return state
  }
}
