import { forgotPassword } from '../../utils/api-call'
import { ForgotPasswordRequest } from '../../utils/types'
import { userActionCreator } from '../action-creators/user'

export function forgotPasswordMiddleware(userData: ForgotPasswordRequest) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
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
