import { logoutUser } from '../../utils/api-call'
import { CookieName, deleteCookie } from '../../utils/cookie'
import { UserLogoutRequest } from '../types/api'
import { userActionCreator } from '../action-creators/user'
import { AppDispatch, AppThunkAction } from '../types/common'

export function logoutUserMiddleware(userData: UserLogoutRequest): AppThunkAction {
  return (dispatch: AppDispatch) => {
    dispatch(userActionCreator.userLogoutRequest())
    deleteCookie(CookieName.AccessToken)
    deleteCookie(CookieName.RefreshToken)
    logoutUser(userData)
      .then(() => {
        dispatch(userActionCreator.userLogoutSuccess())
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userLogoutError())
      })
  }
}
