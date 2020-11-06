import { fromJS } from 'immutable';
import { SET_DATA_LIST } from '../constants';
import initialState from '../state';

export default (state = initialState.Settings, action) => {
	switch (action.type) {
	case SET_DATA_LIST:
		return {
			...state,
			dataList: fromJS(action.data),
		};
	default:
		return state;
	}
};
