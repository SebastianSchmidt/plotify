import { applyMiddleware, createStore } from 'redux'
import { logInitialState, loggingMiddleware } from '../shared/logging/redux'

import isDev from 'electron-is-dev'
import reducer from './reducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

if (isDev) {
  middleware.push(loggingMiddleware(true))
}

const store = createStore(reducer, applyMiddleware(...middleware))

if (isDev) {
  logInitialState(store, true)
}

export default store
