import { registerUser } from '../../utils/api-call'
import { extractToken, setCookie } from '../../utils/cookie'
import { UserRegisterRequest } from '../../utils/types'
import { userActionCreator } from '../action-creators/user'

export function registerUserMiddleware(user: UserRegisterRequest) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(userActionCreator.userRegisterRequest())
    registerUser(user)
      .then(res => {
        dispatch(userActionCreator.userRegisterSuccess(res.user))
        const accessToken = extractToken(res.accessToken)
        setCookie('accessToken', accessToken, { expires: 1200 })
        setCookie('refreshToken', res.refreshToken)
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userRegisterError())
      })
  }
}
