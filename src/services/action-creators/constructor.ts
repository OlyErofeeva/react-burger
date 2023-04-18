import { ConstructorActionType } from '../action-types/action-types'
import {
  ConstructorIngredient,
  RemoveConstructorIngredientAction,
  SetConstructorIngredientsAction,
} from '../types/constructor'

export const constructorActionCreator = {
  setIngredients: (payload: ConstructorIngredient[]): SetConstructorIngredientsAction => ({
    type: ConstructorActionType.SetIngredients,
    payload: payload,
  }),
  removeIngredient: (payload: ConstructorIngredient['constructorId']): RemoveConstructorIngredientAction => ({
    type: ConstructorActionType.RemoveIngredient,
    payload: payload,
  }),
}
