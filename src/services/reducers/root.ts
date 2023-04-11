import { combineReducers } from 'redux'
import {
  activeModalIngredientReducer,
  initialState as ActiveModalIngredientInitialState,
} from './active-modal-ingredient'
import { constructorReducer, initialState as ConstructorInitialState } from './constructor'
import { ingredientsReducer, initialState as IngredientInitialState } from './ingredients'
import { orderReducer, initialState as OrderInitialState } from './order'
import { userReducer, initialState as UserInitialState } from './user'

export const initialState = {
  ingredients: IngredientInitialState,
  constructor: ConstructorInitialState,
  activeModalIngredient: ActiveModalIngredientInitialState,
  order: OrderInitialState,
  user: UserInitialState,
}

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  activeModalIngredient: activeModalIngredientReducer,
  order: orderReducer,
  user: userReducer,
})
