import {
  FORGOT_PASSWORD_URL,
  INGREDIENTS_URL,
  LOGIN_URL,
  LOGOUT_URL,
  ORDER_URL,
  REGISTER_URL,
  RESET_PASSWORD_URL,
} from '../configs/api-settings'
import {
  ForgotPasswordRequest,
  Ingredient,
  ResetPasswordRequest,
  UserLoginRequest,
  UserLogoutRequest,
  UserRegisterRequest,
} from './types'

const handleResponse = (res: Response) => {
  if (res.ok) {
    return res.json()
  }

  const { status, statusText } = res
  return res.json().then(info => Promise.reject(new Error(`${info.message} (${status} ${statusText})`)))
}

export const fetchIngredients = () => {
  return fetch(INGREDIENTS_URL).then(res => handleResponse(res))
}

export const placeOrder = (orderIngredients: Ingredient['_id'][]) => {
  return fetch(ORDER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: orderIngredients,
    }),
  }).then(res => handleResponse(res))
}

export const registerUser = (user: UserRegisterRequest) => {
  return fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      name: user.name,
    }),
  }).then(res => handleResponse(res))
}

export const loginUser = (user: UserLoginRequest) => {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  }).then(res => handleResponse(res))
}

export const forgotPassword = (userData: ForgotPasswordRequest) => {
  return fetch(FORGOT_PASSWORD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userData.email,
    }),
  }).then(res => handleResponse(res))
}

export const resetPassword = (userData: ResetPasswordRequest) => {
  return fetch(RESET_PASSWORD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: userData.password,
      token: userData.token,
    }),
  }).then(res => handleResponse(res))
}

export const logoutUser = (userData: UserLogoutRequest) => {
  return fetch(LOGOUT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: userData.token,
    }),
  }).then(res => handleResponse(res))
}
