/* @flow */

/* libs */
import React, { Component } from 'react'
import { View } from 'react-native'
import Stars from 'react-native-stars'

/* helpers */
import { Images, Colors } from '../../resources'
import { prepareThumbnailSource, getAuthors, getPrice } from '../../utils/booksUtils'

/* components */
import Header from '../../components/Header'
import HeaderBackButton from '../../components/HeaderBackButton'
import Button from '../../components/Button'

/* styled-components */
import {
  Container,
  DetailContainer,
  DetailInfo,
  ThumbnailContainer,
  ThumbnailImage,
  Title,
  Author,
  PriceAndRating,
  ContentContainer,
  DetailFooter,
  PagesContainer,
  PurchaseContainer,
  DescriptionContainer,
  DescriptionText,
  TotalPages,
  StarRating,
  LikeButton
} from './style'

class Detail extends Component<*> {

  static navigationOptions = () => ({
    headerTitle: <Header title='Detail' />,
    headerLeft: <HeaderBackButton />
  })

  renderHeaderDetail = (book: Book) => (
    <DetailContainer>
      <DetailInfo>
        <ThumbnailContainer>
          <ThumbnailImage source={prepareThumbnailSource(book)} />
        </ThumbnailContainer>
        <ContentContainer>
          <View>
            <Title>
              {book.volumeInfo.title}
            </Title>
            <Author>{getAuthors(book.volumeInfo.authors)}</Author>
          </View>
          <PriceAndRating>
            <Title>
              {book.saleInfo.saleability === 'FOR_SALE'
                ? getPrice(book)
                : 'Unavailable'
              }
            </Title>
            <StarRating>
              <Stars
                half={false}
                default={4}
                update={val => { console.log(val) }}
                spacing={3}
                count={5}
                starSize={14}
                fullStar={Images.startFilled}
                emptyStar={Images.startEmpty}
              />
            </StarRating>
          </PriceAndRating>
        </ContentContainer>
      </DetailInfo>
      <DetailFooter>
        <PagesContainer>
          <TotalPages>
            {Boolean(book.volumeInfo.pageCount)
              ? `${book.volumeInfo.pageCount} pages`
              : 'Pages not informed'
            }
          </TotalPages>
        </PagesContainer>
        <PurchaseContainer>
          <Button label='Buy' small />
          <LikeButton>
            <Button
              icon={Images.hearth}
              backgroundColor={Colors.red}
              small
            />
          </LikeButton>
        </PurchaseContainer>
      </DetailFooter>
    </DetailContainer>
  )

  renderDescription = ({ volumeInfo: { description } }: Book) => (
    <DescriptionContainer>
      <DescriptionText>{description}</DescriptionText>
    </DescriptionContainer>
  )

  render () {
    const book = this.props.navigation.getParam('book', {})
    console.log(book)

    return (
      <Container>
        {this.renderHeaderDetail(book)}
        {this.renderDescription(book)}
      </Container>
    )
  }

}

export default Detail
