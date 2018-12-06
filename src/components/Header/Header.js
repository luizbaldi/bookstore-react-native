/* @flow */

/* libs */
import React from 'react'

/* styled-components */
import { Container, Title } from './style'

type Props = {
  title: string
}

const HeaderTitle = ({ title }: Props) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)

export default HeaderTitle
