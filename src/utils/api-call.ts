import {
  FORGOT_PASSWORD_URL,
  INGREDIENTS_URL,
  LOGIN_URL,
  LOGOUT_URL,
  ORDER_URL,
  REFRESH_TOKEN_URL,
  REGISTER_URL,
  RESET_PASSWORD_URL,
  USER_PROFILE_URL,
} from '../configs/api-settings'
import {
  ForgotPasswordRequest,
  GetUserResponse,
  Ingredient,
  RefreshTokenRequest,
  ResetPasswordRequest,
  UserEditRequest,
  UserEditResponse,
  UserLoginRequest,
  UserLoginResponse,
  UserLogoutRequest,
  UserRegisterRequest,
  UserRegisterResponse,
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

export const registerUser = (user: UserRegisterRequest): Promise<UserRegisterResponse> => {
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

export const loginUser = (user: UserLoginRequest): Promise<UserLoginResponse> => {
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

export const refreshToken = (authData: RefreshTokenRequest) => {
  return fetch(REFRESH_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: authData.token,
    }),
  }).then(res => handleResponse(res))
}

export const getUser = (accessToken: string): Promise<GetUserResponse> => {
  return fetch(USER_PROFILE_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).then(res => handleResponse(res))
}

export const editUser = (user: UserEditRequest, accessToken: string): Promise<UserEditResponse> => {
  return fetch(USER_PROFILE_URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(user),
  }).then(res => handleResponse(res))
}
