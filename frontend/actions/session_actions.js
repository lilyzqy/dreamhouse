import * as APIUtil from '../util/session_api_util';
import { clearError } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const signup = formUser => dispatch => (
  APIUtil.signup(formUser).then(
    (user) =>{
      dispatch(receiveCurrentUser(user));
      dispatch(clearError());
    },
    err => dispatch(receiveErrors(err.responseJSON)
  ))
);

export const login = formUser => dispatch => (
  APIUtil.login(formUser).then(
    (user) => {
      dispatch(receiveCurrentUser(user));
      dispatch(clearError());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);
