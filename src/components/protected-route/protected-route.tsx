import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { CookieName, getCookie } from '../../utils/cookie'

type Props = {
  element: React.ReactElement
}

const ProtectedRoute: React.FC<Props> = ({ element }) => {
  const location = useLocation()
  const accessToken = getCookie(CookieName.AccessToken)
  return accessToken ? element : <Navigate to="/login" replace state={{ from: location.pathname }} />
}

export default ProtectedRoute
