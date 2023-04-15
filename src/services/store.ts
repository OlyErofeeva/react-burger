import { applyMiddleware, compose, createStore } from 'redux'
import { initialState, rootReducer } from './reducers/root'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { wsMiddleware } from './thunks/ws-middleware'

export const store = createStore(
  rootReducer,
  initialState,
  typeof window === 'object' && composeWithDevTools ? composeWithDevTools(applyMiddleware(thunk, wsMiddleware('wss://norma.nomoreparties.space/orders/all'))) : compose,
)
