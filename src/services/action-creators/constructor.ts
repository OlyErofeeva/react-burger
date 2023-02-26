import { ConstructorIngredient } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

export const constructorActionCreator = {
  setIngredients: (payload: ConstructorIngredient[]) => ({
    type: ActionType.SetConstructorIngredients,
    payload: payload,
  }),
  removeIngredient: (payload: ConstructorIngredient['constructorId']) => ({
    type: ActionType.RemoveConstructorIngredient,
    payload: payload,
  }),
}
