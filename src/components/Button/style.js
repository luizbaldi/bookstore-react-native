/* @flow */
import styled from 'styled-components/native'
import { Colors } from '../../resources'

export const Container = styled.TouchableOpacity`
  padding-horizontal: 65;
  borderRadius: 50;
  flexDirection: row;
  alignItems: center;
  justifyContent: center;
  background-color: ${Colors.blue};
  height: 35;
`

export const Label = styled.Text`
  color: ${Colors.white}
`