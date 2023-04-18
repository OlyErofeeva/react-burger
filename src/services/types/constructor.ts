import { ConstructorActionType } from '../action-types/action-types'
import { Ingredient } from './ingredient'

export type ConstructorIngredient = Ingredient & {
  constructorId: string
}

export type ConstructorState = {
  items: ConstructorIngredient[]
}

export type SetConstructorIngredientsAction = {
  readonly type: ConstructorActionType.SetIngredients
  readonly payload: ConstructorIngredient[]
}

export type RemoveConstructorIngredientAction = {
  readonly type: ConstructorActionType.RemoveIngredient
  readonly payload: ConstructorIngredient['constructorId']
}

export type ConstructorAction = SetConstructorIngredientsAction | RemoveConstructorIngredientAction
