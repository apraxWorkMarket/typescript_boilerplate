import setDataList from './setDataList';

const initialFetch = () => async (dispatch, getState) => {
	const fullState = getState();
	const swaggerClient = fullState.Global.get('swaggerClient');
	const user = fullState.Global.getIn(['user', 'dimensions', 'user']);
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
		const settingsList = settingNames.reduce((accumulator, settingName) => {
			return [
				...accumulator,
				userSettingsBody[settingName][0],
			];
		}, []);
		dispatch(setDataList(settingsList));
	}
};

export default initialFetch;
