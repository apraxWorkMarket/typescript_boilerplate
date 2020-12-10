import {takeEvery} from 'redux-saga/effects';
import CONSTANTS from '../constants';
import incrementAsync from './incrementAsync';

export default function* rootSaga() {
	console.log("In sagas/index.ts, the root saga");
	yield takeEvery(CONSTANTS.INCREMENT_ASYNC, incrementAsync);
}