// @flow
import React from 'react'
import { View } from 'react-native'
import Stars from 'react-native-stars'

/* helpers */
import { Images, Colors } from '../../../resources'
import { prepareThumbnailSource, getAuthors, getPrice } from '../../../utils/booksUtils'

/* components */
import Button from '../../../components/Button'

/* styled-components */
import {
  StyledDetailContainer,
  StyledDetailInfo,
  StyledThumbnailContainer,
  StyledThumbnailImage,
  StyledContentContainer,
  StyledTitle,
  StyledAuthor,
  StyledPriceAndRating,
  StyledDetailFooter,
  StyledPagesContainer,
  StyledPurchaseContainer,
  StyledLikeButton,
  StyledTotalPages,
  StyledStarRating
} from '../style'

type Props = {
  book: Book
}

const HeaderDetail = ({ book }: Props) => (
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

export default HeaderDetail
