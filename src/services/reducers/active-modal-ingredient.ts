import { ActiveModalIngredientActionType } from '../action-types/action-types'
import { ActiveModalIngredientAction, ActiveModalIngredientState } from '../types/active-modal-ingredient'

export const initialState: ActiveModalIngredientState = {
  item: null,
}

export const activeModalIngredientReducer = (
  state = initialState,
  action: ActiveModalIngredientAction,
): ActiveModalIngredientState => {
  switch (action.type) {
    case ActiveModalIngredientActionType.SetIngredient:
      return {
        ...state,
        item: action.payload,
      }
    case ActiveModalIngredientActionType.ClearIngredient:
      return {
        ...state,
        item: null,
      }
    default:
      return state
  }
}
