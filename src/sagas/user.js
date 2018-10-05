import { put, call, select } from 'redux-saga/effects';
import * as actions from '../actions/userActions';

export function* loginUser(action) {
  console.log('SAGA USER - loginUser', action);
}
 