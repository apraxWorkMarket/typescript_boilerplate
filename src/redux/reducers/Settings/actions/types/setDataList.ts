import { Action, ActionCreator } from 'redux';
import CONSTANTS from '../../../../constants';


// TODO(aprax) fix Any
export interface SetDataListActionType extends Action {
  data: any;
  type: CONSTANTS.SET_DATA_LIST;
}

const createSetDataListAction: ActionCreator<SetDataListActionType> = (data: any) => ({
  data,
  type: CONSTANTS.SET_DATA_LIST,
})

export default createSetDataListAction;
