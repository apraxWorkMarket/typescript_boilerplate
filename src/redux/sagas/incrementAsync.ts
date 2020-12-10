import { delay, put, select } from 'redux-saga/effects';
import createSetCounterAction from '../reducers/Counter/actions/types/setCounter';
import { State } from '../state';

const incrementCounter = function*() {
	console.log("in incremewnt counter saga...");
	const state: State = yield select()
	const newValue = state.typescript_boilerplate.Counter.value + 1;
	yield delay(2000); // Fakes an asynchronous action that takes 2 seconds.
	yield put(createSetCounterAction(newValue));
}

export default incrementCounter;