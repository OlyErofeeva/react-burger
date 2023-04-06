import { IngredientsActionType } from '../action-types/action-types'
import { Progress } from './common'

export enum IngredientType {
  BUN = 'bun',
  SAUCE = 'sauce',
  MAIN = 'main',
}

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

export type IngredientState = {
  items: Ingredient[]
  listFetchProgress: Progress
}

export type IngredientsFetchRequestAction = {
  readonly type: IngredientsActionType.FetchRequest
}

export type IngredientsFetchSuccessAction = {
  readonly type: IngredientsActionType.FetchSuccess
  readonly payload: Ingredient[]
}

export type IngredientsFetchErrorAction = {
  readonly type: IngredientsActionType.FetchError
}

export type IngredientAction =
  | IngredientsFetchRequestAction
  | IngredientsFetchSuccessAction
  | IngredientsFetchErrorAction
