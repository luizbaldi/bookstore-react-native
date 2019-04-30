/* @flow */

/* libs */
import React, { useCallback } from 'react'
import { Image, Alert } from 'react-native'
import { connect } from 'react-redux'

/* helpers */
import { Images } from '../../resources'
import { fetchBooks } from '../../redux/actions'

/* styled-components */
import { Container } from './style'

type Props = {
  fetchBooks: (book: string | null) => void
}

const HeaderSearch = ({ fetchBooks }: Props) => {

  const onPress = useCallback(() => {
    Alert.prompt(
      'Search new books',
      'Type your search below:',
      text => fetchBooks(text)
    )
  }, [])

  return (
    <Container onPress={onPress}>
      <Image source={Images.search} />
    </Container>
  )
}

export default connect(null, { fetchBooks })(HeaderSearch)
