import { loginUser } from '../../utils/api-call'
import { User, UserLoginRequest } from '../../utils/types'
import { userActionCreator } from '../action-creators/user'

export function loginUserMiddleware(user: UserLoginRequest) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(userActionCreator.userLoginRequest())
    loginUser(user)
      .then(res => {
        dispatch(userActionCreator.userLoginSuccess(res.user as User))
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userLoginError())
      })
  }
}
