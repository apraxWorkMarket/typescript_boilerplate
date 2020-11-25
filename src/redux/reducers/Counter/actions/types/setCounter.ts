import { Action, ActionCreator } from 'redux';
import CONSTANTS from '../../../../constants';

export interface SetCounterActionType extends Action {
	type: CONSTANTS.SET_COUNTER,
	data: {
		value: number,
	}
}

const createSetCounterAction: ActionCreator<SetCounterActionType> = (value: number) => ({
	 data: {
		 value,
	 },
	 type: CONSTANTS.SET_COUNTER
 })
 export default createSetCounterAction;