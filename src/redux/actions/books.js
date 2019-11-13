/* @flow */

import { FETCH_BOOKS, REFRESH_SEARCH } from './types';

export const fetchBooks = (book: string | null = null): ActionCreator => ({
  type: FETCH_BOOKS,
  payload: book
});

export const refreshSearch = (book: string): ActionCreator => ({
  type: REFRESH_SEARCH,
  payload: book
});
