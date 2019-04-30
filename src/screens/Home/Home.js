/* @flow */

/* libs */
import React, { useCallback } from 'react'
import { Text } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

/* helpers */
import { Images } from '../../resources'

/* components */
import Button from '../../components/Button'

/* styled-components */
import { StyledContainer, StyledIcon } from './style'

type Props = NavigationScreenProps

const Home = ({ navigation }: Props) => {
  const onStartPress = useCallback(() => {
    navigation.navigate('list')
  }, [])

  return (
    <StyledContainer>
      <Text>Super Mega Blaster Amazing Bookstore</Text>
      <StyledIcon source={Images.icon} />
      <Button
        label="Let's start!"
        onPress={onStartPress}
      />
    </StyledContainer>
  )
}

Home.navigationOptions = {
  header: null
}

export default Home
