import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { loadState, saveState } from './utils/localStorage'
import rootReducer from './redux/reducer'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const persistedState = loadState()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

store.subscribe(() => saveState({ list: store.getState().list }))

sagaMiddleware.run(saga)

export default store
