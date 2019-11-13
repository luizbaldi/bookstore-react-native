/* @flow */
import styled from 'styled-components/native';

import { Colors } from '@/resources';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${Colors.yellow};
  padding-vertical: 12px;
  padding-horizontal: 6px;
`;

export const StyledIcon = styled.Image`
  margin-vertical: 36;
`;

export const StyledLoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledBookImage = styled.Image`
  height: 136px;
  resize-mode: cover;
  border-radius: 2px;
`;

export const StyledBookButton = styled.TouchableOpacity`
  flex: 1;
  margin-horizontal: 10px;
  margin-vertical: 12px;
`;

export const StyledCurrentSearch = styled.Text`
  padding-horizontal: 10px;
  padding-bottom: 4px;
  font-size: 10px;
  color: ${Colors.grey};
  font-style: italic;
`;

export const StyledLoadingLabel = styled.Text`
  color: ${Colors.grey};
  margin-bottom: 16px;
`;
