/* @flow */

/* libs */
import React, { useCallback } from 'react'
import { Image, Alert } from 'react-native'
import { useDispatch } from 'react-redux'

/* helpers */
import { Images } from '../../resources'
import { fetchBooks } from '../../redux/actions'

/* styled-components */
import { Container } from './style'

const HeaderSearch = () => {
  const dispatch = useDispatch()

  const onPress = useCallback(() => {
    Alert.prompt(
      'Search new books',
      'Type your search below:',
      text => dispatch(fetchBooks(text))
    )
  }, [])

  return (
    <Container onPress={onPress}>
      <Image source={Images.search} />
    </Container>
  )
}

export default HeaderSearch
