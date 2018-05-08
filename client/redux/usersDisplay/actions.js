/* @flow */
import axios from 'axios';
export const FETCH_BEGIN   = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchUsersBegin = () => ({
  type: FETCH_BEGIN
});

export const fetchUsersSuccess = response => ({
  type: FETCH_SUCCESS,
  payload: { response }
});

export const fetchUsersFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
});

/*
@TODO : move script to a helper file/component to be re-used in the future
 */
export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch(fetchUsersSuccess(response));
        return response;
      }).catch(error => dispatch(fetchUsersFailure(error)));
  };
}
