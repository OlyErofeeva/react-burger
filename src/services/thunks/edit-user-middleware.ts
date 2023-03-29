import { editUser } from '../../utils/api-call'
import { CookieName, getCookie } from '../../utils/cookie'
import { UserEditRequest } from '../types/api'
import { userActionCreator } from '../action-creators/user'
import { refreshTokenMiddleware } from './refresh-token-middleware'

export function editUserMiddleware(user: UserEditRequest) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    const accessToken = getCookie(CookieName.AccessToken)
    dispatch(userActionCreator.userEditProfileRequest())
    editUser(user, accessToken || '')
      .then(res => {
        dispatch(userActionCreator.userEditProfileSuccess(res.user))
      })
      .catch(err => {
        console.log(err?.message)
        if (err?.message.includes('jwt expired')) {
          dispatch(refreshTokenMiddleware(editUserMiddleware(user), userActionCreator.userEditProfileError()))
        } else {
          dispatch(userActionCreator.userEditProfileError())
        }
      })
  }
}
