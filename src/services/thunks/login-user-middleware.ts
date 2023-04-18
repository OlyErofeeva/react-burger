import { extractToken, loginUser } from '../../utils/api-call'
import { CookieName, setCookie } from '../../utils/cookie'
import { UserLoginRequest } from '../types/api'
import { userActionCreator } from '../action-creators/user'
import { AppDispatch, AppThunkAction } from '../types/common'

export function loginUserMiddleware(user: UserLoginRequest): AppThunkAction {
  return (dispatch: AppDispatch) => {
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
