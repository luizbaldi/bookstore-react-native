import { createStackNavigator, createAppContainer } from "react-navigation"

import { Colors } from "../resources"

/* screens */
import Home from "../screens/Home"
import List from "../screens/List"
import Detail from "../screens/Detail"

const defaultNavigationOptions = {
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: Colors.yellow,
    borderBottomWidth: 0
  }
}

export default createAppContainer(
  createStackNavigator(
    {
      home: { screen: Home },
      list: { screen: List },
      detail: { screen: Detail }
    },
    { defaultNavigationOptions }
  )
)
