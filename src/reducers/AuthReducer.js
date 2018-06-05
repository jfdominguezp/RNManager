import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USER_LOGIN:
      return { ...state, error: '', loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, error: 'Authentication failed', password: '', loading: false }
    default:
      return state;
  }
};
