/* @flow */

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

/* redux */
import { Provider } from 'react-redux'
import { store } from './redux'

/* screens */
import Home from './screens/Home'

const Container = createAppContainer(
  createStackNavigator({
    home: { screen: Home }
  })
)

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
)

export default App
