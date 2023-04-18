import { extractToken, registerUser } from '../../utils/api-call'
import { CookieName, setCookie } from '../../utils/cookie'
import { UserRegisterRequest } from '../types/api'
import { userActionCreator } from '../action-creators/user'
import { AppDispatch, AppThunkAction } from '../types/common'

export function registerUserMiddleware(user: UserRegisterRequest): AppThunkAction {
  return (dispatch: AppDispatch) => {
    dispatch(userActionCreator.userRegisterRequest())
    registerUser(user)
      .then(res => {
        dispatch(userActionCreator.userRegisterSuccess(res.user))
        const accessToken = extractToken(res.accessToken)
        setCookie(CookieName.AccessToken, accessToken, { expires: 1200 })
        setCookie(CookieName.RefreshToken, res.refreshToken)
      })
      .then(() => {
        dispatch(userActionCreator.userRegisterClearProgress())
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userRegisterError())
      })
  }
}
