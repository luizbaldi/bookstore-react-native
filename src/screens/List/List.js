/* @flow */

/* libs */
import React, { Component } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'

/* helpers */
import { fetchBooks, refreshSearch } from '../../redux/actions'
import { Colors } from '../../resources'
import { prepareThumbnailSource } from '../../utils/booksUtils'

/* components */
import Header from '../../components/Header'
import HeaderMenu from '../../components/HeaderMenu'
import HeaderSearch from '../../components/HeaderSearch'

/* styled-components */
import {
  StyledContainer,
  StyledLoadingContainer,
  StyledBookImage,
  StyledBookButton,
  StyledCurrentSearch,
  StyledLoadingLabel
} from './style'

class List extends Component<*> {

  static navigationOptions = () => ({
    headerTitle: <Header title='List' />,
    headerLeft: <HeaderMenu />,
    headerRight: <HeaderSearch />
  })

  componentDidMount () {
    this.props.fetchBooks()
  }

  onRefreshSearch = () => {
    const book = this.props.currentSearch
    this.props.refreshSearch(book)
  }

  renderCurrentSearch = () => (
    <StyledCurrentSearch>
      Current search: {this.props.currentSearch}
    </StyledCurrentSearch>
  )

  renderBook = ({ item: book }) => (
    <StyledBookButton
      activeOpacity={0.6}
      onPress={() => this.props.navigation.navigate('detail', { book })}
    >
      <StyledBookImage source={prepareThumbnailSource(book)} />
    </StyledBookButton>
  )

  renderLoadingContainer = () => (
    <StyledLoadingContainer>
      <StyledLoadingLabel>
        Loading books...
      </StyledLoadingLabel>
      <ActivityIndicator size='large' color={Colors.grey} />
    </StyledLoadingContainer>
  )

  renderBooksList = (books: Array<Book>) => (
    <FlatList
      data={books}
      keyExtractor={(item: Book) => item.id}
      renderItem={this.renderBook}
      numColumns={3}
      onRefresh={this.onRefreshSearch}
      refreshing={this.props.refreshLoading}
    />
  )

  render () {
    const { loading, items } = this.props

    return (
      <StyledContainer>
        {!loading && this.renderCurrentSearch()}
        {loading
          ? this.renderLoadingContainer()
          : this.renderBooksList(items)
        }
      </StyledContainer>
    )
  }

}

const mapStateToProps = (
  { books: { loading, items, currentSearch, refreshLoading } }
) => (
  { loading, items, currentSearch, refreshLoading }
)

export default connect(
  mapStateToProps, { fetchBooks, refreshSearch }
)(List)
