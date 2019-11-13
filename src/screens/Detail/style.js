/* @flow */
import styled from 'styled-components/native';
import Stars from 'react-native-stars';

import { Colors } from '@/resources';

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;

export const StyledDetailContainer = styled.View`
  flex: 1;
  background-color: ${Colors.yellow};
  padding-vertical: 12;
  padding-horizontal: 18;
`;

export const StyledDetailInfo = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const StyledThumbnailContainer = styled.View`
  flex: 1;
  margin-right: 16;
`;

export const StyledThumbnailImage = styled.Image`
  height: 136;
  resize-mode: cover;
  border-radius: 2;
  background-color: red;
`;

export const StyledContentContainer = styled.View`
  flex: 2;
  justify-content: space-between;
  margin-bottom: 18;
`;

export const StyledTitle = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

export const StyledStarRating = styled.View`
  margin-left: 12;
`;

export const StyledAuthor = styled.Text`
  font-size: 11;
  color: ${Colors.grey};
  margin-bottom: 18;
  margin-top: 2;
`;

export const StyledPriceAndRating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledRating = styled(Stars)`
  margin-left: 22;
`;

export const StyledDetailFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledPagesContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledPurchaseContainer = styled.View`
  flex: 2;
  justify-content: flex-end;
  flex-direction: row;
`;

export const StyledDescriptionContainer = styled.ScrollView`
  flex: 2;
  background-color: ${Colors.white};
  padding-top: 18;
  padding-horizontal: 14;
  padding-bottom: 38;
`;

export const StyledDescriptionText = styled.Text`
  font-size: 12;
  letter-spacing: 1.2;
  line-height: 20;
  margin-bottom: 30;
`;

export const StyledTotalPages = styled.Text`
  font-size: 11;
  color: ${Colors.grey};
`;

export const StyledLikeButton = styled.View`
  margin-left: 8;
`;
