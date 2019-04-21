/* @flow */

/* libs */
import React, { Component } from 'react'
import { Text } from 'react-native'

/* helpers */
import { Images } from '../../resources'

/* components */
import Button from '../../components/Button'

/* styled-components */
import { StyledContainer, StyledIcon } from './style'

class Home extends Component<*> {

  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <StyledContainer>
        <Text>Super Mega Blaster Amazing Bookstore</Text>
        <StyledIcon source={Images.icon} />
        <Button
          label="Let's start!"
          onPress={() => this.props.navigation.navigate('list')}
        />
      </StyledContainer>
    )
  }

}

export default Home
