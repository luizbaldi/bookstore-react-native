/* @flow */
import styled from 'styled-components/native'
import { Colors } from '../../resources'

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.yellow};
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${Colors.textColor};
  fontSize: 14;
  textAlign: center;
`

export const Divider = styled.View`
  height: 2;
  background-color: ${Colors.darkYellow};
  width: 40%;
  position: absolute;
  bottom: 0;
`