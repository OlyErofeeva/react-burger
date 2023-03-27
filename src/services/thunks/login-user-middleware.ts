import { extractToken, loginUser } from '../../utils/api-call'
import { CookieName, setCookie } from '../../utils/cookie'
import { UserLoginRequest } from '../../utils/types'
import { userActionCreator } from '../action-creators/user'

export function loginUserMiddleware(user: UserLoginRequest) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(userActionCreator.userLoginRequest())
    loginUser(user)
      .then(res => {
        dispatch(userActionCreator.userLoginSuccess(res.user))
        const accessToken = extractToken(res.accessToken)
        setCookie(CookieName.AccessToken, accessToken, { expires: 1200 })
        setCookie(CookieName.RefreshToken, res.refreshToken)
      })
      .then(() => {
        dispatch(userActionCreator.userLoginClearProgress())
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userLoginError())
      })
  }
}
