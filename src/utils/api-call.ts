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
  ForgotPasswordResponse,
  GetUserResponse,
  IngredientsResponse,
  PlaceOrderResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  UserEditRequest,
  UserEditResponse,
  UserLoginRequest,
  UserLoginResponse,
  UserLogoutRequest,
  UserLogoutResponse,
  UserRegisterRequest,
  UserRegisterResponse,
} from '../services/types/api'
import { Ingredient } from './types'

const handleResponse = (res: Response) => {
  if (res.ok) {
    return res.json()
  }
  const { status, statusText } = res
  return res.json().then(info => Promise.reject(new Error(`${info.message} (status: ${status}, status text:${statusText})`)))
}

const request = (url: RequestInfo | URL, options?: RequestInit) => {
  return fetch(url, options).then(handleResponse)
}

export function extractToken(authToken: string) {
  return authToken.split('Bearer ')[1]
}

export const fetchIngredients = (): Promise<IngredientsResponse> => {
  return request(INGREDIENTS_URL)
}

export const placeOrder = (orderIngredients: Ingredient['_id'][], accessToken: string): Promise<PlaceOrderResponse> => {
  return request(ORDER_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: orderIngredients,
    }),
  })
}

export const registerUser = (user: UserRegisterRequest): Promise<UserRegisterResponse> => {
  return request(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      name: user.name,
    }),
  })
}

export const loginUser = (user: UserLoginRequest): Promise<UserLoginResponse> => {
  return request(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    }),
  })
}

export const forgotPassword = (userData: ForgotPasswordRequest): Promise<ForgotPasswordResponse> => {
  return request(FORGOT_PASSWORD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userData.email,
    }),
  })
}

export const resetPassword = (userData: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
  return request(RESET_PASSWORD_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: userData.password,
      token: userData.token,
    }),
  })
}

export const logoutUser = (userData: UserLogoutRequest): Promise<UserLogoutResponse> => {
  return request(LOGOUT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: userData.token,
    }),
  })
}

export const refreshToken = (authData: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
  return request(REFRESH_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: authData.token,
    }),
  })
}

export const getUser = (accessToken: string): Promise<GetUserResponse> => {
  return request(USER_PROFILE_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}

export const editUser = (user: UserEditRequest, accessToken: string): Promise<UserEditResponse> => {
  return request(USER_PROFILE_URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(user),
  })
}
