/* @flow */

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Colors } from './resources'

/* redux */
import { Provider } from 'react-redux'
import { store } from './redux'

/* screens */
import Home from './screens/Home'
import List from './screens/List'
import Detail from './screens/Detail'

const defaultNavigationOptions = {
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: Colors.yellow,
    borderBottomWidth: 0
  }
}

const Container = createAppContainer(
  createStackNavigator({
    home: { screen: Home },
    list: { screen: List },
    detail: { screen: Detail },
  }, { defaultNavigationOptions })
)

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
)

export default App
