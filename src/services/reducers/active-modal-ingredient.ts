import { ActionType } from '../action-types/action-types'
import { ActiveModalIngredientAction } from '../types/active-modal-ingredient'
import { GlobalState } from '../types/common'

export const initialState: GlobalState['activeModalIngredient'] = {
  item: null,
}

export const activeModalIngredientReducer = (
  state = initialState,
  action: ActiveModalIngredientAction,
): GlobalState['activeModalIngredient'] => {
  switch (action.type) {
    case ActionType.SetActiveModalIngredient:
      return {
        ...state,
        item: action.payload,
      }
    case ActionType.ClearActiveModalIngredient:
      return {
        ...state,
        item: null,
      }
    default:
      return state
  }
}
