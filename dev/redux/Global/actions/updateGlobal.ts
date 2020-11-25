import { Action, ActionCreator } from "redux";
import CONSTANTS from "../../../../src/redux/constants";

export interface UpdateGlobalActionType extends Action {
  type: CONSTANTS.UPDATE_GLOBAL;
  initialData: {[index:string]: any};
}

const createUpdateGlobalAction: ActionCreator<UpdateGlobalActionType> = (initialData: UpdateGlobalActionType["initialData"]) => ({
	type: CONSTANTS.UPDATE_GLOBAL,
	initialData
})

export default createUpdateGlobalAction;