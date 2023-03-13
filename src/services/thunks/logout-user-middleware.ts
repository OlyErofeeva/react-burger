import { logoutUser } from '../../utils/api-call'
import { CookieName, deleteCookie } from '../../utils/cookie'
import { UserLogoutRequest } from '../../utils/types'
import { userActionCreator } from '../action-creators/user'

export function logoutUserMiddleware(userData: UserLogoutRequest) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(userActionCreator.userLogoutRequest())
    logoutUser(userData)
      .then(() => {
        dispatch(userActionCreator.userLogoutSuccess())
        deleteCookie(CookieName.AccessToken)
        deleteCookie(CookieName.RefreshToken)
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userLogoutError())
      })
  }
}
