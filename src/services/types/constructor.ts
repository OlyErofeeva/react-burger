import { ActionType } from '../action-types/action-types'
import { Ingredient } from './ingredient'

export type ConstructorIngredient = Ingredient & {
  constructorId: string
}

export type ConstructorState = {
  items: ConstructorIngredient[]
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
