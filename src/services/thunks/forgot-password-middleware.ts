import { forgotPassword } from '../../utils/api-call'
import { ForgotPasswordRequest } from '../types/api'
import { userActionCreator } from '../action-creators/user'
import { AppDispatch, AppThunkAction } from '../types/common'

export function forgotPasswordMiddleware(userData: ForgotPasswordRequest): AppThunkAction {
  return (dispatch: AppDispatch) => {
    dispatch(userActionCreator.userForgotPasswordRequest())
    forgotPassword(userData)
      .then(res => {
        dispatch(userActionCreator.userForgotPasswordSuccess())
      })
      .then(() => {
        dispatch(userActionCreator.userForgotPasswordClearProgress())
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userForgotPasswordError())
      })
  }
}
