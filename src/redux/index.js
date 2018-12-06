import { combineReducers, createStore } from 'redux'

/* reducers */
import dumb from './reducers/dumb'

const rootReducer = combineReducers({
  dumb
})

const store = createStore(rootReducer)

export { store }
