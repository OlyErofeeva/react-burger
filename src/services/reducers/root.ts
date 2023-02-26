import { combineReducers, Reducer } from 'redux'
import { GlobalState } from '../../utils/types'
import {
  activeModalIngredientReducer,
  initialState as ActiveModalIngredientInitialState,
} from './active-modal-ingredient'
import { constructorReducer, initialState as ConstructorInitialState } from './constructor'
import { ingredientsReducer, initialState as IngredientInitialState } from './ingredients'
import { orderReducer, initialState as OrderInitialState } from './order'

export const initialState: GlobalState = {
  ingredients: IngredientInitialState,
  constructor: ConstructorInitialState,
  activeModalIngredient: ActiveModalIngredientInitialState,
  order: OrderInitialState,
}

export const rootReducer: Reducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  activeModalIngredient: activeModalIngredientReducer,
  order: orderReducer,
})
