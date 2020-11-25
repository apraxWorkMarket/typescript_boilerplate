import { Reducer } from 'redux';
import CONSTANTS from '../../../constants';
import initialState, { State } from '../../../state';
 import { SetCounterActionType } from '../../Counter/actions/types/setCounter';
const reducer: Reducer<State["typescript_boilerplate"]["Counter"], SetCounterActionType> = (state = initialState.Counter, action) => {
	switch (action.type) {
		case CONSTANTS.SET_COUNTER:
			const { value } = action.data;
			return {
					...state,
					value
			};
		default: 
			return state;
	}
}

export default reducer;