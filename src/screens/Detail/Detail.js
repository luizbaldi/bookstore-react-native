/* @flow */

/* libs */
import React from 'react'
import { NavigationScreenProps } from 'react-navigation'

/* components */
import Header from '../../components/Header'
import HeaderBackButton from '../../components/HeaderBackButton'

import HeaderDetail from './components/HeaderDetail'
import Description from './components/Description'

/* styled-components */
import { StyledContainer } from './style'

type Props = NavigationScreenProps

const Detail = ({ navigation }: Props) => {
  const book = navigation.getParam('book', {})

  return (
    <StyledContainer>
      <HeaderDetail book={book} />
      <Description description={book.volumeInfo.description} />
    </StyledContainer>
  )
}

Detail.navigationOptions = () => ({
  headerTitle: <Header title='Detail' />,
  headerLeft: <HeaderBackButton />
})

export default Detail
