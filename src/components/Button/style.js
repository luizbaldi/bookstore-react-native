/* @flow */
import styled from 'styled-components/native'
import { Colors } from '../../resources'

export const Container = styled.TouchableOpacity`
  padding-horizontal: ${({ iconOnly }) => iconOnly ? 6 : 35};
  borderRadius: 50;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ small }) => small ? 28 : 35};
`

export const Label = styled.Text`
  color: ${Colors.white};
  font-size: ${({ small }) => small ? 10 : 12};
`

export const Content = styled.View`
  flex-direction: row
`

export const Icon = styled.Image`

`