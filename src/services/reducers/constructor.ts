import { ActionType } from '../action-types/action-types'
import { GlobalState } from '../types/common'
import { ConstructorAction } from '../types/constructor'

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
