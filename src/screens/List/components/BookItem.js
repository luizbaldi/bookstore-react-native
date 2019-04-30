// @flow

import React from 'react'
import { withNavigation } from 'react-navigation'
import { NavigationScreenProps } from 'react-navigation'

import { StyledBookButton, StyledBookImage } from '../style'
import { prepareThumbnailSource } from '../../../utils/booksUtils'

type Props = {
  book: Book,
  navigation: NavigationScreenProps
}

const BookItem = ({ book, navigation }: Props) => (
  <StyledBookButton
    activeOpacity={0.6}
    onPress={() => navigation.navigate('detail', { book })}
  >
    <StyledBookImage source={prepareThumbnailSource(book)} />
  </StyledBookButton>
)

export default withNavigation(BookItem)
