import { ConstructorActionType } from '../action-types/action-types'
import { ConstructorAction, ConstructorState } from '../types/constructor'

export const initialState: ConstructorState = {
  items: [],
}

export const constructorReducer = (state = initialState, action: ConstructorAction): ConstructorState => {
  switch (action.type) {
    case ConstructorActionType.SetIngredients:
      return {
        ...state,
        items: action.payload,
      }
    case ConstructorActionType.RemoveIngredient:
      const filteredItems = state.items.filter(item => item.constructorId !== action.payload)
      return {
        ...state,
        items: filteredItems,
      }
    default:
      return state
  }
}
