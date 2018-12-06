import { call, put, takeEvery } from "redux-saga/effects"
import { searchBooks } from '../../services/booksService'
import { FETCH_BOOKS, FETCH_ERROR, SHOW_BOOKS } from '../actions/types'


/* workers */
function* fetchBooks(action) {
  try {
    const data = yield call(searchBooks)
    yield put({ type: SHOW_BOOKS, payload: data })
  } catch (error) {
    yield put({ type: FETCH_ERROR, error })
  }
}

/* root saga */
export default function* rootSaga() {
  console.log('start sagas')
  yield takeEvery(FETCH_BOOKS, fetchBooks)
}