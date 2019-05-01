/* @flow */

/* libs */
import React, { useEffect, useCallback } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
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

type Props = NavigationScreenProps & {}

const List = ({ navigation }: Props) => {
  const { loading, items, currentSearch, refreshLoading } = useSelector(({ books }) => books)
  const dispatch = useDispatch()

  console.log({ loading, items, currentSearch, refreshLoading });

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  const onRefreshSearch = useCallback(() => {
    dispatch(refreshSearch(currentSearch))
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

export default List
