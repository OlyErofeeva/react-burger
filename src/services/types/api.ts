import { Ingredient, Order, User } from '../../utils/types'

type ResponseWithSuccess = {
  success: boolean
}

type ResponseWithAuthTokens = {
  accessToken: string
  refreshToken: string
}

type RequestWithPassword = {
  password: string
}

export type IngredientsResponse = {
  data: Ingredient[]
} & ResponseWithSuccess

export type PlaceOrderResponse = {
  name: Order['name']
  order: Omit<Order, 'name'>
} & ResponseWithSuccess

export type UserRegisterRequest = User & RequestWithPassword

export type UserRegisterResponse = {
  user: User
} & ResponseWithAuthTokens & ResponseWithSuccess

export type UserLoginRequest = {
  email: User['email']
} & RequestWithPassword

export type UserLoginResponse = UserRegisterResponse

export type ForgotPasswordRequest = {
  email: User['email']
}

export type ForgotPasswordResponse = {
  message?: string
} & ResponseWithSuccess

export type ResetPasswordRequest = {
  token: string // email code
} & RequestWithPassword

export type ResetPasswordResponse = ForgotPasswordResponse

export type UserLogoutRequest = {
  token: string // refreshToken
}

export type UserLogoutResponse = ForgotPasswordResponse

export type RefreshTokenRequest = UserLogoutRequest

export type RefreshTokenResponse = ResponseWithSuccess & ResponseWithAuthTokens

export type GetUserResponse = {
  user: User
} & ResponseWithSuccess

export type UserEditRequest = Partial<UserRegisterRequest>

export type UserEditResponse = GetUserResponse
