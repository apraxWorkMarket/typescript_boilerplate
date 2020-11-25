import React, { FunctionComponent } from 'react';
import createIncrementAsyncAction, { IncrementAsyncActionType } from '../../../redux/reducers/Settings/actions/types/incrementAsync';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import initialState, { State } from '../../../redux/state';

interface DispatchProps {
	incrementAsync: () => void,
}

const Counter: FunctionComponent<State["typescript_boilerplate"]["Counter"] & DispatchProps> = ({ value, incrementAsync }) => {
	return (
		<div>
			<button onClick={incrementAsync}>Increment Async</button>
			Value: {value}
		</div>
	)
}
const mapStateToProps = (state: State = { typescript_boilerplate: initialState }) => {
	const value = state.typescript_boilerplate.Counter.value;
	return {
		value,
	}
}
const mapDispatchToProps = (dispatch: Dispatch<IncrementAsyncActionType, State>) => ({
	incrementAsync: () => dispatch(createIncrementAsyncAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);