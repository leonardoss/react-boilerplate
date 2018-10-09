import { put, call } from 'redux-saga/effects';
import * as actions from '../actions/authActions';

import AuthDriver from '../common/auth/AuthDriverExample';

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
  yield put(actions.isAuthenticating(true));
  yield call(() => Auth.authenticateWithUsernameAndPassword(
    action.credentials,
  ));
  yield put(actions.isAuthenticating(false));
}
