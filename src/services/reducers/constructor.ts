import { ConstructorAction, GlobalState } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

export const initialState: GlobalState['constructor'] = {
  items: [],
}

export const constructorReducer = (state = initialState, action: ConstructorAction): GlobalState['constructor'] => {
  switch (action.type) {
    case ActionType.SetConstructorIngredients:
      return {
        ...state,
        items: action.payload,
      }
    case ActionType.RemoveConstructorIngredient:
      const filteredItems = state.items.filter(item => item.constructorId !== action.payload)
      return {
        ...state,
        items: filteredItems,
      }
    default:
      return state
  }
}
