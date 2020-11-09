import { Reducer } from 'redux';
import { fromJS } from 'immutable';
import { CONSTANTS } from '../constants';
import initialState, { State } from '../state';
import { SetDataListActionType } from '../actions/setDataList';


const settingsReducer: Reducer<State["bootstrap_4_1_1"]["Settings"], SetDataListActionType> =  (state = initialState.Settings, action: SetDataListActionType) => {
	switch (action.type) {
    case CONSTANTS.SET_DATA_LIST:
      return {
        ...state,
        dataList: fromJS(action.data),
      };
    default:
      return state;
	}
};

export default settingsReducer;