import {
  LOGIN_USER,
} from '../actions/userActions';

const initialState = {
  user: {},
  authenticated: false,
};

export default function UserReducer(state = initialState, action) {
  console.log('action', action);
  console.log('initialState', initialState);
  
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state, user: action.user, authenticated: action.authenticated,
      };
    default:
      return state;
  }
}
