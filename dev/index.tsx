import React from 'react';
import { render } from 'react-dom';
import {
	createStore,
	applyMiddleware,
	combineReducers,
  Action,
} from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import {
	MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { workmarketTheme } from '@workmarket/theme-provider';
import { fromJS, Map } from 'immutable';
import ProductionContainer from '../src/Production';
import featureReducer from '../src/redux/reducers';
import getSwagger from './swagger';
import initialFetch from './initialFetch';
import { State } from '../src/redux/state';
import { SetDataListActionType } from '../src/redux/actions/setDataList';
import CONSTANTS from '../src/redux/constants';
import SwaggerClient from '../src/api/types/SwaggerClient';

const reduxLogger = createLogger({ collapsed: true });

const global: State["Global"] = fromJS({
	isPerformingInitialLoad: true,
	swaggerClient: {} as SwaggerClient,
	user: Promise.resolve({user: 'mockUser', companyId: 'mockCompanyid'}),
	largeUser: {
		userInfo: {
			email: process.env.USERNAME || 'Placeholder_USERNAME',
			fullName: process.env.FULLNAME || 'Placeholder_FULLNAME',
		},
	},
});

const initialState = global;

interface SetSwaggerActionType extends Action {
  type: CONSTANTS.SET_SWAGGER;
  swaggerClient: SwaggerClient;
}

interface UpdateGlobalActionType extends Action {
  type: CONSTANTS.UPDATE_GLOBAL;
  initialData: {[index:string]: any};
}
const shellStore = createStore(
	combineReducers({
		bootstrap_4_1_1: featureReducer,
		Global: (state: State["Global"] = initialState, action: SetDataListActionType | SetSwaggerActionType | UpdateGlobalActionType) => {
			if (action.type === CONSTANTS.SET_SWAGGER) {
				return state!.set('swaggerClient', action.swaggerClient);
			}

			if (action.type === CONSTANTS.UPDATE_GLOBAL) {
				return state!.merge(action.initialData).set('isPerformingInitialLoad', false);
			}

			return state;
		},
	}),
	composeWithDevTools(applyMiddleware(reduxThunk, reduxLogger)),
);

const apiClient = getSwagger()
	.then((swaggerClient) => {
		shellStore.dispatch({
			type: 'SET_SWAGGER',
			swaggerClient,
		});
		return swaggerClient;
	})
	.then((swaggerClient) => {
		initialFetch(swaggerClient)
			.then((initialData) => {
				shellStore.dispatch({
					type: 'UPDATE_GLOBAL',
					initialData,
				});
			});
		return swaggerClient;
	});

const theme = createMuiTheme(workmarketTheme.globalTheme as any);

const dev = () => render(
	<MuiThemeProvider theme={ theme }>
		<Provider store={ shellStore }>
			<div style={ { height: '100vh' } }>
				<ProductionContainer
					store={ shellStore }
					apiClient={ apiClient }
				/>
			</div>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('app'),
);

dev();

export default dev;
