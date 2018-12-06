/* @flow */

declare type Book = {
  id: string,
  volumeInfo: {
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    }
  }
}
