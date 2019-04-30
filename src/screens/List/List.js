/* @flow */

/* libs */
import React, { useEffect, useCallback } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { NavigationScreenProps } from 'react-navigation'

/* helpers */
import { fetchBooks, refreshSearch } from '../../redux/actions'
import { Colors } from '../../resources'

/* components */
import Header from '../../components/Header'
import HeaderMenu from '../../components/HeaderMenu'
import HeaderSearch from '../../components/HeaderSearch'

import BookItem from './components/BookItem'

/* styled-components */
import {
  StyledContainer,
  StyledLoadingContainer,
  StyledCurrentSearch,
  StyledLoadingLabel
} from './style'

type Props = {
  loading: boolean,
  items: Array<Book>,
  navigation: NavigationScreenProps,
  refreshSearch: (book: string) => void,
  currentSearch: string,
  fetchBooks: (book?: string) => void,
  refreshLoading: boolean
}

const List = ({ refreshLoading, fetchBooks, currentSearch, refreshSearch, loading, items, navigation }: Props) => {
  useEffect(() => {
    fetchBooks()
  }, [])

  const onRefreshSearch = useCallback(() => {
    refreshSearch(currentSearch)
  }, [currentSearch])

  return (
    <StyledContainer>
      {!loading && (
        <StyledCurrentSearch>
          Current search: {currentSearch}
        </StyledCurrentSearch>
      )}
      {loading
        ? (
          <StyledLoadingContainer>
            <StyledLoadingLabel>
              Loading books...
            </StyledLoadingLabel>
            <ActivityIndicator size='large' color={Colors.grey} />
          </StyledLoadingContainer>
        )
        : (
          <FlatList
            data={items}
            keyExtractor={(item: Book) => item.id}
            renderItem={({ item }) => <BookItem book={item} />}
            numColumns={3}
            onRefresh={onRefreshSearch}
            refreshing={refreshLoading}
          />
        )
      }
    </StyledContainer>
  )
}

List.navigationOptions = () => ({
  headerTitle: <Header title='List' />,
  headerLeft: <HeaderMenu />,
  headerRight: <HeaderSearch />
})

const mapStateToProps = (
  { books: { loading, items, currentSearch, refreshLoading } }
) => (
  { loading, items, currentSearch, refreshLoading }
)

export default connect(
  mapStateToProps, { fetchBooks, refreshSearch }
)(List)
