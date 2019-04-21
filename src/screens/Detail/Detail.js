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
  StyledContainer,
  StyledDetailContainer,
  StyledDetailInfo,
  StyledThumbnailContainer,
  StyledThumbnailImage,
  StyledTitle,
  StyledAuthor,
  StyledPriceAndRating,
  StyledContentContainer,
  StyledDetailFooter,
  StyledPagesContainer,
  StyledPurchaseContainer,
  StyledDescriptionContainer,
  StyledDescriptionText,
  StyledTotalPages,
  StyledStarRating,
  StyledLikeButton
} from './style'

class Detail extends Component<*> {

  static navigationOptions = () => ({
    headerTitle: <Header title='Detail' />,
    headerLeft: <HeaderBackButton />
  })

  renderHeaderDetail = (book: Book) => (
    <StyledDetailContainer>
      <StyledDetailInfo>
        <StyledThumbnailContainer>
          <StyledThumbnailImage source={prepareThumbnailSource(book)} />
        </StyledThumbnailContainer>
        <StyledContentContainer>
          <View>
            <StyledTitle>
              {book.volumeInfo.title}
            </StyledTitle>
            <StyledAuthor>
              {getAuthors(book.volumeInfo.authors)}
            </StyledAuthor>
          </View>
          <StyledPriceAndRating>
            <StyledTitle>
              {book.saleInfo.saleability === 'FOR_SALE'
                ? getPrice(book)
                : 'Unavailable'
              }
            </StyledTitle>
            <StyledStarRating>
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
            </StyledStarRating>
          </StyledPriceAndRating>
        </StyledContentContainer>
      </StyledDetailInfo>
      <StyledDetailFooter>
        <StyledPagesContainer>
          <StyledTotalPages>
            {Boolean(book.volumeInfo.pageCount)
              ? `${book.volumeInfo.pageCount} pages`
              : 'Pages not informed'
            }
          </StyledTotalPages>
        </StyledPagesContainer>
        <StyledPurchaseContainer>
          <Button label='Buy' small />
          <StyledLikeButton>
            <Button
              icon={Images.hearth}
              backgroundColor={Colors.red}
              small
            />
          </StyledLikeButton>
        </StyledPurchaseContainer>
      </StyledDetailFooter>
    </StyledDetailContainer>
  )

  renderDescription = ({ volumeInfo: { description } }: Book) => (
    <StyledDescriptionContainer>
      <StyledDescriptionText>
        {description}
      </StyledDescriptionText>
    </StyledDescriptionContainer>
  )

  render () {
    const book = this.props.navigation.getParam('book', {})

    return (
      <StyledContainer>
        {this.renderHeaderDetail(book)}
        {this.renderDescription(book)}
      </StyledContainer>
    )
  }

}

export default Detail
