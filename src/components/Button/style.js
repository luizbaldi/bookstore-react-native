/* @flow */
import styled from 'styled-components/native';
import { Colors } from '@/resources';

export const Container = styled.TouchableOpacity`
  padding-horizontal: ${({ iconOnly }) => (iconOnly ? 6 : 35)}px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ small }) => (small ? 28 : 35)}px;
`;

export const Label = styled.Text`
  color: ${Colors.white};
  font-size: ${({ small }) => (small ? 10 : 12)}px;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Icon = styled.Image``;
