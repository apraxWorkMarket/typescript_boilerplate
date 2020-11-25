import { Dispatch } from 'redux';
import SwaggerClient from '../../../../api/types/SwaggerClient';
import { State } from '../../../state';
import setDataList, { SetDataListActionType } from './setDataList';

const initialFetch = () => async (dispatch: Dispatch<SetDataListActionType, State>,  getState: () => State) => {
	const fullState = getState();
	const swaggerClient: SwaggerClient = fullState.Global!.get('swaggerClient') as SwaggerClient;
	const user = fullState.Global!.getIn(['user', 'dimensions', 'user']);
	if (swaggerClient && user) {
		const userSettingsResponse = await swaggerClient.execute({
			operationId: 'wm_setting_getAll',
			parameters: {
				req: {
					dimensions: [{
						user,
						override: '-1',
					}],
				},
			},
		});

		const userSettingsBody = userSettingsResponse.body.result.payload[0].settings;
		const settingNames = Object.keys(userSettingsBody);
		const settingsList = settingNames.reduce((accumulator: string[], settingName) => {
			return [
				...accumulator,
				userSettingsBody[settingName][0],
			];
		}, []);
		dispatch(setDataList(settingsList));
	}
};

export default initialFetch;
