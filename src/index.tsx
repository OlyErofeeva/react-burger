import React from 'react'
import ReactDOM from 'react-dom/client'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css'
import App from './components/app/app'
import reportWebVitals from './reportWebVitals'
import { initialState, rootReducer } from './services/reducers/reducers'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const composeEnhancers = typeof window === 'object' && composeWithDevTools ? composeWithDevTools({}) : compose

const store = createStore(rootReducer, initialState, composeEnhancers())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
