import {
  FETCH_BOOKS,
  FETCH_ERROR,
  SHOW_BOOKS,
  SET_CURRENT_SEARCH,
  SET_REFRESH_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  error: false,
  items: [],
  currentSearch: '',
  refreshLoading: false
};

const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS:
      return { ...state, loading: true };
    case FETCH_ERROR:
      return { ...state, error: true };
    case SHOW_BOOKS:
      return {
        ...state,
        items: payload,
        loading: false,
        refreshLoading: false
      };
    case SET_CURRENT_SEARCH:
      return { ...state, currentSearch: payload };
    case SET_REFRESH_LOADING:
      return { ...state, refreshLoading: true };
    default:
      return state;
  }
};

export default booksReducer;
