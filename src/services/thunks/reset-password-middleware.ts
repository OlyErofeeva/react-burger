import { resetPassword } from '../../utils/api-call'
import { ResetPasswordRequest } from '../types/api'
import { userActionCreator } from '../action-creators/user'

export function resetPasswordMiddleware(userData: ResetPasswordRequest) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
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
