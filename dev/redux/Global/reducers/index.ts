import { Reducer } from 'redux';
import CONSTANTS from '../../../../src/redux/constants';
import { SetSwaggerActionType } from '../actions/setSwagger';
import { UpdateGlobalActionType } from '../actions/updateGlobal';

import initialState from '../state';

const globalReducer: Reducer<typeof initialState, SetSwaggerActionType | UpdateGlobalActionType> = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS.SET_SWAGGER:
			return state!.set('swaggerClient', action.swaggerClient);
		case CONSTANTS.UPDATE_GLOBAL:
			return state!.merge(action.initialData).set('isPerformingInitialLoad', false);
		default:
			return state;
	}

}
export default globalReducer;