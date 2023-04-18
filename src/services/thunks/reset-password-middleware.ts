import { resetPassword } from '../../utils/api-call'
import { ResetPasswordRequest } from '../types/api'
import { userActionCreator } from '../action-creators/user'
import { AppDispatch, AppThunkAction } from '../types/common'

export function resetPasswordMiddleware(userData: ResetPasswordRequest): AppThunkAction {
  return (dispatch: AppDispatch) => {
    dispatch(userActionCreator.userResetPasswordRequest())
    resetPassword(userData)
      .then(res => {
        dispatch(userActionCreator.userResetPasswordSuccess())
      })
      .then(() => {
        dispatch(userActionCreator.userResetPasswordClearProgress())
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userResetPasswordError())
      })
  }
}
