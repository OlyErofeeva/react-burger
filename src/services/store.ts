import { applyMiddleware, compose, createStore } from 'redux'
import { initialState, rootReducer } from './reducers/root'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = createStore(
  rootReducer,
  initialState,
  typeof window === 'object' && composeWithDevTools ? composeWithDevTools(applyMiddleware(thunk)) : compose,
)
