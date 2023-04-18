import { combineReducers } from 'redux'
import {
  activeModalIngredientReducer,
  initialState as ActiveModalIngredientInitialState,
} from './active-modal-ingredient'
import { constructorReducer, initialState as ConstructorInitialState } from './constructor'
import { ingredientsReducer, initialState as IngredientInitialState } from './ingredients'
import { orderReducer, initialState as OrderInitialState } from './order'
import { userReducer, initialState as UserInitialState } from './user'
import { wsFeedReducer, initialState as WSFeedInitialState } from './ws-feed'
import { wsProfileOrdersReducer, initialState as WSProfileOrdersInitialState } from './ws-profile-orders'

export const initialState = {
  ingredients: IngredientInitialState,
  constructor: ConstructorInitialState,
  activeModalIngredient: ActiveModalIngredientInitialState,
  order: OrderInitialState,
  user: UserInitialState,
  wsFeed: WSFeedInitialState,
  wsProfileOrders: WSProfileOrdersInitialState,
}

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  activeModalIngredient: activeModalIngredientReducer,
  order: orderReducer,
  user: userReducer,
  wsFeed: wsFeedReducer,
  wsProfileOrders: wsProfileOrdersReducer,
})
