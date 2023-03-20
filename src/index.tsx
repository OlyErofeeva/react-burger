import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import './index.css'
import App from './components/app/app'
import reportWebVitals from './reportWebVitals'
import { initialState, rootReducer } from './services/reducers/root'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const store = createStore(
  rootReducer,
  initialState,
  typeof window === 'object' && composeWithDevTools ? composeWithDevTools(applyMiddleware(thunk)) : compose,
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
