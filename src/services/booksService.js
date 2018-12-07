/* @flow */

import axios from 'axios'
import { getUrlWithKey, extractData } from '../utils/apiutils'

const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='

const searchBooks = (search: string = 'the hitchhikers guide'): Promise<Object> => {
  const url = getUrlWithKey(`${baseUrl}${search}`)

  return axios.get(url)
    .then(extractData)
    .then(({ items }) => items)
}

export { searchBooks }
