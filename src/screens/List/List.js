/* @flow */

/* libs */
import React, { Component } from 'react'
import { Text, View } from 'react-native'

/* helpers */

/* components */
import Header from '../../components/Header'
import ToggleMenu from '../../components/ToggleMenu'

/* styled-components */
import { Container } from './style'

class List extends Component<*> {

  static navigationOptions = () => ({
    headerTitle: <Header title='List' />,
    headerLeft: <ToggleMenu />,
    headerRight: <View />
  })

  render () {
    return (
      <Container>
        <Text>Bookstore list</Text>
      </Container>
    )
  }

}

export default List
