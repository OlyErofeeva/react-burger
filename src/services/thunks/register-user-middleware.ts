import { registerUser } from '../../utils/api-call'
import { User, UserRegisterRequest } from '../../utils/types'
import { userActionCreator } from '../action-creators/user'

export function registerUserMiddleware(user: UserRegisterRequest) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(userActionCreator.userRegisterRequest())
    registerUser(user)
      .then(res => {
        dispatch(userActionCreator.userRegisterSuccess(res.user as User))
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userRegisterError())
      })
  }
}
