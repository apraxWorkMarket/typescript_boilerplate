import { fromJS } from 'immutable';
import SwaggerClient from '../../../../src/api/types/SwaggerClient';
import { State } from '../../../../src/redux/state';

const initial: State["Global"] = fromJS({
	isPerformingInitialLoad: true,
	swaggerClient: {} as SwaggerClient,
	user: Promise.resolve({ user: 'mockUser', companyId: 'mockCompanyid' }),
	largeUser: {
		userInfo: {
			email: process.env.USERNAME || 'Placeholder_USERNAME',
			fullName: process.env.FULLNAME || 'Placeholder_FULLNAME',
		},
	},
});

export default initial;