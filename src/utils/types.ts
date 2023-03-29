import { ActionType } from '../services/action-types/action-types'

export type Ingredient = {
  _id: string
  name: string
  type: IngredientType
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
  __v: number
}

export type ConstructorIngredient = Ingredient & {
  constructorId: string
}

export enum IngredientType {
  BUN = 'bun',
  SAUCE = 'sauce',
  MAIN = 'main',
}

export type GlobalState = {
  ingredients: IngredientState
  constructor: ConstructorState
  activeModalIngredient: ActiveModalIngredientState
  order: OrderState
  user: UserState
}

export enum Progress {
  IDLE = 'IDLE',
  WORK = 'WORK',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type IngredientState = {
  items: Ingredient[]
  listFetchProgress: Progress
}

export type ConstructorState = {
  items: ConstructorIngredient[]
}

export type ActiveModalIngredientState = {
  item: Ingredient | null
}

export type Order = {
  name: string
  number: number
}

export type OrderState = {
  item: Order | null
  itemAddProgress: Progress
}

export type User = {
  name: string
  email: string
}

export type UserState = {
  user: User | null
  registrationProgress: Progress
  loginProgress: Progress
  forgotPasswordProgress: Progress
  resetPasswordProgress: Progress
  refreshTokenProgress: Progress
  logoutProgress: Progress
  getProfileProgress: Progress
  editProfileProgress: Progress
}

export type IngredientAction =
  | {
      type: ActionType.IngredientsFetchRequest
    }
  | {
      type: ActionType.IngredientsFetchSuccess
      payload: Ingredient[]
    }
  | {
      type: ActionType.IngredientsFetchError
    }

export type ConstructorAction =
  | {
      type: ActionType.SetConstructorIngredients
      payload: ConstructorIngredient[]
    }
  | {
      type: ActionType.RemoveConstructorIngredient
      payload: ConstructorIngredient['constructorId']
    }

export type ActiveModalIngredientAction =
  | {
      type: ActionType.SetActiveModalIngredient
      payload: Ingredient
    }
  | {
      type: ActionType.ClearActiveModalIngredient
    }

export type OrderAction =
  | {
      type: ActionType.PlaceOrderRequest
    }
  | {
      type: ActionType.PlaceOrderSuccess
      payload: Order
    }
  | {
      type: ActionType.PlaceOrderError
    }

export type UserAction =
  | { type: ActionType.UserRegisterRequest }
  | { type: ActionType.UserRegisterSuccess; payload: User }
  | { type: ActionType.UserRegisterError }
  | { type: ActionType.UserRegisterClearProgress }
  | { type: ActionType.UserLoginRequest }
  | { type: ActionType.UserLoginSuccess; payload: User }
  | { type: ActionType.UserLoginError }
  | { type: ActionType.UserLoginClearProgress }
  | { type: ActionType.UserForgotPasswordRequest }
  | { type: ActionType.UserForgotPasswordSuccess }
  | { type: ActionType.UserForgotPasswordError }
  | { type: ActionType.UserForgotPasswordClearProgress }
  | { type: ActionType.UserResetPasswordRequest }
  | { type: ActionType.UserResetPasswordSuccess }
  | { type: ActionType.UserResetPasswordError }
  | { type: ActionType.UserResetPasswordClearProgress }
  | { type: ActionType.UserRefreshTokenRequest }
  | { type: ActionType.UserRefreshTokenSuccess }
  | { type: ActionType.UserRefreshTokenError }
  | { type: ActionType.UserLogoutRequest }
  | { type: ActionType.UserLogoutSuccess }
  | { type: ActionType.UserLogoutError }
  | { type: ActionType.UserGetProfileRequest }
  | { type: ActionType.UserGetProfileSuccess; payload: User }
  | { type: ActionType.UserGetProfileError }
  | { type: ActionType.UserEditProfileRequest }
  | { type: ActionType.UserEditProfileSuccess; payload: User }
  | { type: ActionType.UserEditProfileError }
