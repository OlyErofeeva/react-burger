import { editUser } from '../../utils/api-call'
import { UserEditRequest } from '../../utils/types'
import { userActionCreator } from '../action-creators/user'

export function editUserMiddleware(user: UserEditRequest, accessToken: string) {
  // TODO fix ts-ignore
  // @ts-ignore
  return dispatch => {
    dispatch(userActionCreator.userEditProfileRequest())
    editUser(user, accessToken)
      .then(res => {
        dispatch(userActionCreator.userEditProfileSuccess(res.user))
      })
      .catch(err => {
        console.log(err.message)
        dispatch(userActionCreator.userEditProfileError())
      })
  }
}
