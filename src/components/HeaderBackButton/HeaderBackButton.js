/* @flow */

/* libs */
import React from 'react';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';

/* helpers */
import { Images } from '@/resources';

/* styled-components */
import { Container } from './style';

const HeaderBackButton = ({ navigation }) => (
  <Container onPress={() => navigation.pop()}>
    <Image source={Images.chevronLeft} />
  </Container>
);

export default withNavigation(HeaderBackButton);
