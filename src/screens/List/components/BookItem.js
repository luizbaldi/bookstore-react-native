// @flow

import React from 'react';
import { withNavigation, NavigationScreenProps } from 'react-navigation';

import { prepareThumbnailSource } from '@/utils/booksUtils';

import { StyledBookButton, StyledBookImage } from '../style';

type Props = {
  book: Book,
  navigation: NavigationScreenProps
};

const BookItem = ({ book, navigation }: Props) => (
  <StyledBookButton
    activeOpacity={0.6}
    onPress={() => navigation.navigate('detail', { book })}
  >
    <StyledBookImage source={prepareThumbnailSource(book)} />
  </StyledBookButton>
);

export default withNavigation(BookItem);
