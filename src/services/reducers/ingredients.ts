import { IngredientsActionType } from '../action-types/action-types'
import { Progress } from '../types/common'
import { IngredientAction, IngredientState } from '../types/ingredient'

export const initialState: IngredientState = {
  items: [],
  listFetchProgress: Progress.IDLE,
}

export const ingredientsReducer = (state = initialState, action: IngredientAction): IngredientState => {
  switch (action.type) {
    case IngredientsActionType.FetchRequest:
      return {
        ...state,
        listFetchProgress: Progress.WORK,
      }
    case IngredientsActionType.FetchSuccess:
      return {
        ...state,
        items: action.payload,
        listFetchProgress: Progress.SUCCESS,
      }
    case IngredientsActionType.FetchError:
      return {
        ...initialState,
        listFetchProgress: Progress.ERROR,
      }
    default:
      return state
  }
}
