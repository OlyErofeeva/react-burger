import React from 'react'
import { Navigate } from 'react-router-dom'
import { CookieName, getCookie } from '../../utils/cookie'

type Props = {
  element: React.ReactElement
}

const ProtectedRoute: React.FC<Props> = ({ element }) => {
  const accessToken = getCookie(CookieName.AccessToken)
  return accessToken ? element : <Navigate to="/login" replace />
}

export default ProtectedRoute
