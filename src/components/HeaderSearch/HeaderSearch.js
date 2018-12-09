/* @flow */

/* libs */
import React, { Component } from 'react'
import { Image, AlertIOS } from 'react-native'
import { connect } from 'react-redux'

/* helpers */
import { Images } from '../../resources'
import { fetchBooks } from '../../redux/actions'

/* styled-components */
import { Container } from './style'

class HeaderSearch extends Component<*> {

  onPress = () => {
    AlertIOS.prompt(
      'Search new books',
      'Type your search below:',
      text => this.props.fetchBooks(text)
    )
  }

  render () {
    return (
      <Container onPress={this.onPress}>
        <Image source={Images.search} />
      </Container>
    )
  }
}

export default connect(null, { fetchBooks })(HeaderSearch)
