/* @flow */

/* libs */
import React from 'react'

/* styled-components */
import { Container, Title, Divider } from './style'

type Props = {
  title: string
}

const HeaderTitle = ({ title }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Divider />
  </Container>
)

export default HeaderTitle
