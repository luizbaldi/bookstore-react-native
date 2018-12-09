/* @flow */
import styled from 'styled-components/native'
import { Colors } from '../../resources'

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.yellow};
  padding-vertical: 12;
  padding-horizontal: 6;
`

export const Icon = styled.Image`
  margin-vertical: 36;
`

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const BookImage = styled.Image`
  height: 136;
  resizeMode: cover;
  border-radius: 2;
`

export const BookButton = styled.TouchableOpacity`
  flex: 1;
  margin-horizontal: 10;
  marginVertical: 12;
`

export const CurrentSearch = styled.Text`
  padding-horizontal: 10;
  padding-bottom: 4;
  font-size: 10;
  color: ${Colors.grey};
  font-style: italic;
`

export const LoadingLabel = styled.Text`
  color: ${Colors.grey};
  margin-bottom: 16;
`