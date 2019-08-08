/* @flow */

import React from 'react'

/* redux */
import { Provider } from 'react-redux'
import configureStore from './redux/store'

/* root navigator */
import RootNavigator from './navigation'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
)

export default App
