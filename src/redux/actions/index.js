/* @flow */

import { FETCH_BOOKS } from './types'

export const fetchBooks = (): ActionCreator => ({
  type: FETCH_BOOKS
})