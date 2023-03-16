import { getUser } from '../../utils/api-call'
import { CookieName, getCookie } from '../../utils/cookie'
import { userActionCreator } from '../action-creators/user'
import { refreshTokenMiddleware } from './refresh-token-middleware'

export function getUserMiddleware() {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    const accessToken = getCookie(CookieName.AccessToken)
    dispatch(userActionCreator.userGetProfileRequest())
    getUser(accessToken || '')
      .then(res => {
        dispatch(userActionCreator.userGetProfileSuccess(res.user))
      })
      .catch(err => {
        console.log(err?.message)
        if (err?.message.includes('jwt expired')) {
          dispatch(refreshTokenMiddleware(getUserMiddleware(), userActionCreator.userGetProfileError()))
        } else {
          dispatch(userActionCreator.userGetProfileError())
        }
      })
  }
}
