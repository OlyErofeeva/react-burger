import { getUser } from '../../utils/api-call'
import { userActionCreator } from '../action-creators/user'

export function getUserMiddleware(accessToken: string) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(userActionCreator.userGetProfileRequest())
    getUser(accessToken)
      .then(res => {
        dispatch(userActionCreator.userGetProfileSuccess(res.user))
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userGetProfileError())
      })
  }
}
