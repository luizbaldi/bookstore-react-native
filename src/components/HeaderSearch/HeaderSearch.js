/* @flow */

/* libs */
import React, { useCallback } from 'react';
import { Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

/* helpers */
import { Images } from '@/resources';
import { fetchBooks } from '@/redux/actions/books';

/* styled-components */
import { StyledContainer } from './style';

const HeaderSearch = () => {
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    Alert.prompt('Search new books', 'Type your search below:', text =>
      dispatch(fetchBooks(text))
    );
  }, []);

  return (
    <StyledContainer onPress={onPress}>
      <Image source={Images.search} />
    </StyledContainer>
  );
};

export default HeaderSearch;
