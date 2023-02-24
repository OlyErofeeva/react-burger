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
  items: Ingredient[]
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

export type ConstructorAction = {
  type: ActionType.SetConstructorIngredients
  payload: Ingredient[]
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
