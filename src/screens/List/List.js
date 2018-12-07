/* @flow */

/* libs */
import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

/* helpers */
import { fetchBooks } from '../../redux/actions'
import { Colors } from '../../resources'
import { prepareThumbnailSource } from '../../utils/booksUtils'

/* components */
import Header from '../../components/Header'
import HeaderMenu from '../../components/HeaderMenu'
import HeaderSearch from '../../components/HeaderSearch'

/* styled-components */
import { Container, LoadingContainer, BookImage, BookButton } from './style'

class List extends Component<*> {

  static navigationOptions = () => ({
    headerTitle: <Header title='List' />,
    headerLeft: <HeaderMenu />,
    headerRight: <HeaderSearch />
  })

  componentDidMount () {
    this.props.fetchBooks()
  }

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
      <ActivityIndicator size='large' color={Colors.white} />
    </LoadingContainer>
  )

  renderBooksList = (books: Array<Book>) => (
    <FlatList
      data={books}
      keyExtractor={(item: Book) => item.id}
      renderItem={this.renderBook}
      numColumns={3}
    />
  )

  render () {
    const { loading, items } = this.props
    return (
      <Container>
        {loading
          ? this.renderLoadingContainer()
          : this.renderBooksList(items)
        }
      </Container>
    )
  }

}

const mapStateToProps = ({ books: { loading, items } }) => ({ loading, items })

export default connect(
  mapStateToProps, { fetchBooks }
)(List)
