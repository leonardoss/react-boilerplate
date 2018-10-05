import { put, call } from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import * as actions from '../actions/authActions';

import AuthDriver from '../common/auth/AuthDriverExample';

const Auth = new AuthDriver({
  authStatusChange: (response) => {
    return new eventChannel(emmit => {

    });
  },
});

function createStatusChangeEventChannel(response) {
  return eventChannel(emitter => {
    const inputs = midiAccess.inputs.values();
    for (
      let input = inputs.next();
      input && !input.done;
      input = inputs.next()
    ) {
      // each time there is a midi message call the onMIDIMessage
      // function
      input.value.onmidimessage = emitter;
    }
    // The subscriber must return an unsubscribe function. We'll
    // just return no op for this example.
    return () => {
      // Cleanup event listeners. Clear timers etc...
    };
  });
}

function* onStatusChange(response) {
  const channel = yield call(createMidiEventChannel, midiAccess);

  while (true) {
    const message = yield take(channel);
    yield call(onMidiMessage, message);
  }
}

export function* authStatusChange(action) {
  console.log('[AuthSaga]', 'authStatusChange', action);
  yield action.user || false;
}

export function* authWithUsernameAndPassword(action) {
  yield put(actions.isAuthenticating(true));
  yield call(() => Auth.authenticateWithUsernameAndPassword(
    action.credentials,
  ));
  yield put(actions.isAuthenticating(false));
}

export function* authWithFederations(action) {
  yield put(actions.isAuthenticating(true));
  yield call(() => Auth.authenticateWithUsernameAndPassword(
    action.credentials,
  ));
  yield put(actions.isAuthenticating(false));
}
