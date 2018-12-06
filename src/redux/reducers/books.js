import { FETCH_BOOKS, FETCH_ERROR, SHOW_BOOKS } from '../actions/types'

const initialState = {
  loading: false,
  error: false,
  items: []
}

const booksReducer = (state = initialState, { type, payload }) => {
  console.log({ type, payload })
  switch (type) {
    case FETCH_BOOKS:
      return { ...state, loading: true }
    case FETCH_ERROR:
      return { ...state, error: true }
    case SHOW_BOOKS:
      return { ...state, items: payload, loading: false }
    default:
      return state
  }
}

export default booksReducer
