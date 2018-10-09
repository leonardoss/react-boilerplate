import {
  IS_AUTHENTICATING,
  AUTH_STATUS_CHANGE,
} from '../actions/authActions';

const initialState = {
  user: {},
  authenticated: false,
  isAuthenticating: false,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.isAuthenticating,
      };
    case AUTH_STATUS_CHANGE:
      return {
        ...state,
        user: action.user,
        authenticated: action.authenticated,
      };
    default:
      return state;
  }
}
