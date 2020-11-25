import {Action} from 'redux';
import CONSTANTS from '../../../constants';

export type IncrementAsyncActionType = Action<CONSTANTS.INCREMENT_ASYNC>;

const createIncrementAsyncActionType: () => IncrementAsyncActionType = () => ({type: CONSTANTS.INCREMENT_ASYNC});
export default createIncrementAsyncActionType;