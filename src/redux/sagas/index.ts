import {takeEvery} from 'redux-saga/effects';
import CONSTANTS from '../constants';
import incrementAsync from './incrementAsync';

export default function* rootSaga() {
	yield takeEvery(CONSTANTS.INCREMENT_ASYNC, incrementAsync);
}