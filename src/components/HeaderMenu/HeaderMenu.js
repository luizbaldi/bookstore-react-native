/* @flow */

/* libs */
import React from 'react';
import { Image } from 'react-native';

/* helpers */
import { Images } from '@/resources';

/* styled-components */
import { Container } from './style';

const HeaderMenu = () => (
  <Container>
    <Image source={Images.menu} />
  </Container>
);

export default HeaderMenu;
