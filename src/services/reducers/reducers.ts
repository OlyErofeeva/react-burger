import { AnyAction, combineReducers, Reducer } from 'redux'
import { GlobalState, Progress } from '../../utils/types'
import { ActionType } from '../action-types/action-types'

export const initialState: GlobalState = {
  ingredients: {
    items: [],
    listFetchProgress: Progress.IDLE,
  },
  constructor: {
    items: [],
  },
  activeModalIngredient: {
    item: null,
  },
  order: {
    item: null,
    itemAddProgress: Progress.IDLE,
  },
}

// TODO fix type for action parameter
const ingredientsReducer = (
  state: GlobalState['ingredients'] = initialState.ingredients,
  action: AnyAction,
): GlobalState['ingredients'] => {
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
        ...state,
        listFetchProgress: Progress.ERROR,
      }
    default:
      return state
  }
}

const constructorReducer = (
  state: GlobalState['constructor'] = initialState.constructor,
  action: AnyAction,
): GlobalState['constructor'] => {
  switch (action.type) {
    case ActionType.SetConstructorIngredients:
      return {
        ...state,
        items: action.payload,
      }
    default:
      return state
  }
}

const activeModalIngredientReducer = (
  state: GlobalState['activeModalIngredient'] = initialState.activeModalIngredient,
  action: AnyAction,
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

const orderReducer = (state: GlobalState['order'] = initialState.order, action: AnyAction): GlobalState['order'] => {
  switch (action.type) {
    case ActionType.PlaceOrderRequest:
      return {
        ...state,
        itemAddProgress: Progress.WORK,
      }
    case ActionType.PlaceOrderSuccess:
      return {
        ...state,
        item: action.payload,
        itemAddProgress: Progress.SUCCESS,
      }
    case ActionType.PlaceOrderError:
      return {
        ...state,
        itemAddProgress: Progress.ERROR,
      }
    default:
      return state
  }
}

export const rootReducer: Reducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  activeModalIngredient: activeModalIngredientReducer,
  order: orderReducer,
})
