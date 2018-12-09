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
  Container,
  LoadingContainer,
  BookImage,
  BookButton,
  CurrentSearch,
  LoadingLabel
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
    <CurrentSearch>
      Current search: {this.props.currentSearch}
    </CurrentSearch>
  )

  renderBook = ({ item: book }) => (
    <BookButton
      activeOpacity={0.6}
      onPress={() => this.props.navigation.navigate('detail', { book })}
    >
      <BookImage source={prepareThumbnailSource(book)} />
    </BookButton>
  )

  renderLoadingContainer = () => (
    <LoadingContainer>
      <LoadingLabel>Loading books...</LoadingLabel>
      <ActivityIndicator size='large' color={Colors.grey} />
    </LoadingContainer>
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
      <Container>
        {!loading && this.renderCurrentSearch()}
        {(loading)
          ? this.renderLoadingContainer()
          : this.renderBooksList(items)
        }
      </Container>
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
