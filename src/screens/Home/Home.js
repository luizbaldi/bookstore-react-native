/* @flow */

/* libs */
import React, { Component } from 'react'
import { Text } from 'react-native'

/* helpers */
import { Images } from '../../resources'

/* components */
import Button from '../../components/Button'

/* styled-components */
import { Container, Icon } from './style'

class Home extends Component<*> {

  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <Container>
        <Text>Super Mega Blaster Amazing Bookstore</Text>
        <Icon source={Images.icon} />
        <Button
          label="Let's start!"
          onPress={() => this.props.navigation.navigate('list')}
        />
      </Container>
    )
  }

}

export default Home
