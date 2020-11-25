import SwaggerClient from "../../../../src/api/types/SwaggerClient";
import { Action, ActionCreator } from 'redux';
import CONSTANTS from "../../../../src/redux/constants";

export interface SetSwaggerActionType extends Action {
	type: CONSTANTS.SET_SWAGGER;
	swaggerClient: SwaggerClient;
}
const createSetSwaggerAction: ActionCreator<SetSwaggerActionType> = 
	(swaggerClient: SwaggerClient) => ({ type: CONSTANTS.SET_SWAGGER, swaggerClient });

export default createSetSwaggerAction;

