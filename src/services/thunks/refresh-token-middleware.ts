import { extractToken, refreshToken } from '../../utils/api-call'
import { CookieName, getCookie, setCookie } from '../../utils/cookie'
import { AppDispatch, AppThunkAction } from '../types/common'

export function refreshTokenMiddleware(onRefreshSuccess: any, onRefreshError: any): AppThunkAction {
  return (dispatch: AppDispatch) => {
    const token = getCookie(CookieName.RefreshToken)
    if (token) {
      refreshToken({ token })
        .then(res => {
          const accessToken = extractToken(res.accessToken)
          setCookie(CookieName.AccessToken, accessToken, { expires: 1200 })
          setCookie(CookieName.RefreshToken, res.refreshToken)
          dispatch(onRefreshSuccess)
        })
        .catch(() => {
          dispatch(onRefreshError)
        })
    }
  }
}
