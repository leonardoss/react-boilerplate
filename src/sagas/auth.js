import { put, call } from 'redux-saga/effects';
import * as actions from '../actions/authActions';

import AuthDriver from '../common/auth/AuthFirebase';

const Auth = new AuthDriver();

export function* authStatusChange(action) {
  console.log('[AuthSaga]', 'authStatusChange', action);
  yield action.user || false;
}

export function* authWithUsernameAndPassword(action) {
  yield put(actions.isAuthenticating(true));
  const response = yield call(() => Auth.authenticateWithUsernameAndPassword(
    action.credentials,
  ));
  yield put(actions.authStatusChange(response));
  yield put(actions.isAuthenticating(false));
}

export function* authWithFederations(action) {
  console.log('authWithFederations', action);
  yield put(actions.isAuthenticating(true));
  let response = false;
  switch (action.federation){
    case 'facebook':
      console.log('authWithFederations facebook');
      response = yield call(() => Auth.authenticateWithFacebook());
      break;
    default:
      break;
  }
  yield put(actions.authStatusChange(response));
  yield put(actions.isAuthenticating(false));
}
