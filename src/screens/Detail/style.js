/* @flow */
import styled from 'styled-components/native'
import Stars from 'react-native-stars'
import { Colors } from '../../resources'

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`

export const DetailContainer = styled.View`
  flex: 1;
  background-color: ${Colors.yellow};
  padding-vertical: 12;
  padding-horizontal: 18;
`

export const DetailInfo = styled.View`
  flex: 1;
  flex-direction: row;
`

export const ThumbnailContainer = styled.View`
  flex: 1;
  margin-right: 16;
`

export const ThumbnailImage = styled.Image`
  height: 136;
  resizeMode: cover;
  border-radius: 2;
  background-color: red;
`

export const ContentContainer = styled.View`
  flex: 2;
  justify-content: space-between;
  margin-bottom: 18;
`

export const Title = styled.Text`
  font-size: 16;
  font-weight: bold;
`

export const StarRating = styled.View`
  margin-left: 12;
`

export const Author = styled.Text`
  font-size: 11;
  color: ${Colors.grey};
  margin-bottom: 18;
  margin-top: 2;
`

export const PriceAndRating = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Rating = styled(Stars)`
  margin-left: 22;
`

export const DetailFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const PagesContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const PurchaseContainer = styled.View`
  flex: 2;
  justify-content: flex-end;
  flex-direction: row;
`

export const DescriptionContainer = styled.ScrollView`
  flex: 2;
  background-color: ${Colors.white};
  padding-top: 18;
  padding-horizontal: 14;
  padding-bottom: 38;
`

export const DescriptionText = styled.Text`
  font-size: 12;
  letter-spacing: 1.2;
  line-height: 20;
  margin-bottom: 30;
`

export const TotalPages = styled.Text`
  font-size: 11;
  color: ${Colors.grey};
`

export const LikeButton = styled.View`
  margin-left: 8;
`