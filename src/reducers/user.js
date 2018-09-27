import {
  RECEIVE_USER,
} from '../actions/userActions';

const initialState = {
  user: {},
  authenticated: false,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state, user: action.user, authenticated: action.authenticated,
      };
    default:
      return state;
  }
}
