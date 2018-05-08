/*
  action
 */

import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './actions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function productReducer(state = initialState, action)  {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        items: []
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.response
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};