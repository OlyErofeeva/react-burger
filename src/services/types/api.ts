import { Ingredient } from './ingredient'
import { Order } from './order'
import { User } from './user'

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

type WebSocketMessage = CommonResponse & {
  orders: FeedOrder[]
  total: number
  totalToday: number
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

export enum OrderStatus {
  Created = 'created',
  Pending = 'pending',
  Done = 'done',
}

export type FeedOrder = {
  _id: string
  ingredients: Ingredient['_id'][]
  name: string
  number: number
  status: OrderStatus
  createdAt: string
  updatedAt: string
}

// web socket: feed
export type FeedResponse = WebSocketMessage

// web socket: profile orders
export type ProfileOrdersResponse = WebSocketMessage
