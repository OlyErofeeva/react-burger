import { GlobalState, IngredientAction, Progress } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

export const initialState: GlobalState['ingredients'] = {
  items: [],
  listFetchProgress: Progress.IDLE,
}

export const ingredientsReducer = (state = initialState, action: IngredientAction): GlobalState['ingredients'] => {
  switch (action.type) {
    case ActionType.IngredientsFetchRequest:
      return {
        ...state,
        listFetchProgress: Progress.WORK,
      }
    case ActionType.IngredientsFetchSuccess:
      return {
        ...state,
        items: action.payload,
        listFetchProgress: Progress.SUCCESS,
      }
    case ActionType.IngredientsFetchError:
      return {
        ...initialState,
        listFetchProgress: Progress.ERROR,
      }
    default:
      return state
  }
}
