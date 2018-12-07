/* @flow */

type Saleability = 'FOR_SALE' | 'NOT_FOR_SALE'

declare type Book = {
  id: string,
  saleInfo: {
    saleability: Saleability,
    listPrice?: {
      amount: number
    }
  },
  volumeInfo: {
    title: string,
    authors: Array<string>,
    pageCount: number,
    description: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    }
  }
}
