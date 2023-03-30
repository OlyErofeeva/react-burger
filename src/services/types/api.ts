import { Ingredient, Order, User } from '../../utils/types'

type CommonResponse = {
  success: boolean
}

type ResponseWithAuthTokens = {
  accessToken: string
  refreshToken: string
}

type ResponseWithMessage = {
  message?: string
}

type ResponseWithUser = {
  user: User
}

type RequestWithPassword = {
  password: string
}

// get ingredient list
export type IngredientsResponse = CommonResponse & {
  data: Ingredient[]
}

// place an order
export type PlaceOrderResponse = CommonResponse & {
  name: Order['name']
  order: Omit<Order, 'name'>
}

// registration
export type UserRegisterRequest = User & RequestWithPassword
export type UserRegisterResponse = CommonResponse & ResponseWithAuthTokens & ResponseWithUser

// login
export type UserLoginRequest = RequestWithPassword & {
  email: User['email']
}
export type UserLoginResponse = UserRegisterResponse

// forgot password
export type ForgotPasswordRequest = {
  email: User['email']
}
export type ForgotPasswordResponse = CommonResponse & ResponseWithMessage

// reset password
export type ResetPasswordRequest = RequestWithPassword & {
  token: string // email code
}
export type ResetPasswordResponse = CommonResponse & ResponseWithMessage

// logout
export type UserLogoutRequest = {
  token: string // refreshToken
}
export type UserLogoutResponse = CommonResponse & ResponseWithMessage

// token refresh
export type RefreshTokenRequest = UserLogoutRequest
export type RefreshTokenResponse = CommonResponse & ResponseWithAuthTokens

// get user info
export type GetUserResponse = CommonResponse & ResponseWithUser

// edit user
export type UserEditRequest = Partial<UserRegisterRequest>
export type UserEditResponse = GetUserResponse
