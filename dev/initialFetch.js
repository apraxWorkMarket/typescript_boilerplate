const initialFetch = async (swaggerClient) => {
	const smallUserPromise = swaggerClient.execute({
		operationId: 'wm_user_dimensions',
		parameters: {},
	});

	const largeUserPromise = swaggerClient.execute({
		operationId: 'getUserConfigurationUsingGET',
		parameters: {},
	});

	const userRequests = [
		smallUserPromise,
		largeUserPromise,
	];

	const userPromises = Promise.all(userRequests);
	const [smallUserResponse, largeUserResponse] = await userPromises;

	const user = smallUserResponse.body.result.payload[0];
	const largeUser = largeUserResponse.body.result.payload[0];

	return {
		user,
		largeUser,
	};
};

export default initialFetch;
