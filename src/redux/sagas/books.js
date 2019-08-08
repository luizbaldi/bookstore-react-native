import { call, put, takeEvery } from "redux-saga/effects"
import { searchBooks } from '../../services/booksService'
import {
  FETCH_BOOKS,
  FETCH_ERROR,
  SHOW_BOOKS,
  SET_CURRENT_SEARCH,
  REFRESH_SEARCH,
  SET_REFRESH_LOADING
} from '../actions/types'

function* fetchBooks(action: ActionCreator) {
  try {
    const searchBook = action.payload || 'the hitchhikers guide'
    yield put({ type: SET_CURRENT_SEARCH, payload: searchBook })

    const data = yield call(searchBooks, searchBook)
    yield put({ type: SHOW_BOOKS, payload: data })
  } catch (error) {
    yield put({ type: FETCH_ERROR, error })
  }
}

function* refreshSearch(action: ActionCreator) {
  try {
    yield put({ type: SET_REFRESH_LOADING })

    const data = yield call(searchBooks, action.payload)
    yield put({ type: SHOW_BOOKS, payload: data })
  } catch (error) {
    yield put({ type: FETCH_ERROR, error })
  }
}

/* root saga */
export default function* booksSagas() {
  yield takeEvery(FETCH_BOOKS, fetchBooks)
  yield takeEvery(REFRESH_SEARCH, refreshSearch)
}
