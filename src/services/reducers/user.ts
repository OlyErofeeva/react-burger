import { GlobalState, Progress, UserAction } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

export const initialState: GlobalState['user'] = {
  user: null,
  registrationProgress: Progress.IDLE,
  loginProgress: Progress.IDLE,
  forgotPasswordProgress: Progress.IDLE,
  resetPasswordProgress: Progress.IDLE,
  refreshTokenProgress: Progress.IDLE,
  logoutProgress: Progress.IDLE,
  getProfileProgress: Progress.IDLE,
}

export const userReducer = (state = initialState, action: UserAction): GlobalState['user'] => {
  switch (action.type) {
    case ActionType.UserRegisterRequest:
      return {
        ...state,
        registrationProgress: Progress.WORK,
      }
    case ActionType.UserRegisterSuccess:
      return {
        ...state,
        user: action.payload,
        registrationProgress: Progress.SUCCESS,
      }
    case ActionType.UserRegisterError:
      return {
        ...initialState,
        registrationProgress: Progress.ERROR,
      }

    case ActionType.UserLoginRequest:
      return {
        ...state,
        loginProgress: Progress.WORK,
      }
    case ActionType.UserLoginSuccess:
      return {
        ...state,
        user: action.payload,
        loginProgress: Progress.SUCCESS,
      }
    case ActionType.UserLoginError:
      return {
        ...initialState,
        loginProgress: Progress.ERROR,
      }

    case ActionType.UserForgotPasswordRequest:
      return {
        ...state,
        forgotPasswordProgress: Progress.WORK,
      }
    case ActionType.UserForgotPasswordSuccess:
      return {
        ...state,
        forgotPasswordProgress: Progress.SUCCESS,
      }
    case ActionType.UserForgotPasswordError:
      return {
        ...initialState,
        forgotPasswordProgress: Progress.ERROR,
      }

    case ActionType.UserResetPasswordRequest:
      return {
        ...state,
        resetPasswordProgress: Progress.WORK,
      }
    case ActionType.UserResetPasswordSuccess:
      return {
        ...state,
        resetPasswordProgress: Progress.SUCCESS,
      }
    case ActionType.UserResetPasswordError:
      return {
        ...initialState,
        resetPasswordProgress: Progress.ERROR,
      }

    case ActionType.UserRefreshTokenRequest:
      return {
        ...state,
        refreshTokenProgress: Progress.WORK,
      }
    case ActionType.UserRefreshTokenSuccess:
      return {
        ...state,
        refreshTokenProgress: Progress.SUCCESS,
      }
    case ActionType.UserRefreshTokenError:
      return {
        ...initialState,
        refreshTokenProgress: Progress.ERROR,
      }

    case ActionType.UserLogoutRequest:
      return {
        ...state,
        logoutProgress: Progress.WORK,
      }
    case ActionType.UserLogoutSuccess:
      return {
        ...state,
        user: null,
        logoutProgress: Progress.SUCCESS,
      }
    case ActionType.UserLogoutError:
      return {
        ...state,
        logoutProgress: Progress.ERROR,
      }

    case ActionType.UserGetProfileRequest:
      return {
        ...state,
        getProfileProgress: Progress.WORK,
      }
    case ActionType.UserGetProfileSuccess:
      return {
        ...state,
        user: action.payload,
        getProfileProgress: Progress.SUCCESS,
      }
    case ActionType.UserGetProfileError:
      return {
        ...state,
        getProfileProgress: Progress.ERROR,
      }
    default:
      return state
  }
}
