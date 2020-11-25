import { Reducer } from 'redux';
import { fromJS } from 'immutable';
import CONSTANTS from '../../../constants';
import initialState, { State } from '../../../state';
import { SetDataListActionType } from '../actions/types/setDataList';

const settingsReducer: Reducer<State["typescript_boilerplate"]["Settings"], SetDataListActionType> =  (state = initialState.Settings, action) => {
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