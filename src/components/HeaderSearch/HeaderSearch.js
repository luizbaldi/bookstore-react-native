/* @flow */

/* libs */
import React from 'react'
import { Image } from 'react-native'

/* helpers */
import { Images } from '../../resources'

/* styled-components */
import { Container } from './style'

const HeaderSearch = () => (
  <Container>
    <Image source={Images.search} />
  </Container>
)

export default HeaderSearch
