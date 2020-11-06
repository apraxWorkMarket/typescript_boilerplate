import React from 'react';
import { render } from 'react-dom';
import {
	createStore,
	applyMiddleware,
	combineReducers,
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
import { fromJS } from 'immutable';
import ProductionContainer from '../src/Production';
import featureReducer from '../src/redux/reducers';
import getSwagger from './swagger';
import initialFetch from './initialFetch';

const reduxLogger = createLogger({ collapsed: true });

const initialState = fromJS({
	isPerformingInitialLoad: true,
	swaggerClient: {},
	user: Promise.resolve({}),
	largeUser: {
		userInfo: {
			email: process.env.USERNAME || 'Placeholder_USERNAME',
			fullName: process.env.FULLNAME || 'Placeholder_FULLNAME',
		},
	},
});

const shellStore = createStore(
	combineReducers({
		bootstrap_4_1_1: featureReducer,
		Global: (state = initialState, action) => {
			if (action.type === 'SET_SWAGGER') {
				return state.set('swaggerClient', action.swaggerClient);
			}

			if (action.type === 'UPDATE_GLOBAL') {
				return state
					.merge(action.initialData)
					.set('isPerformingInitialLoad', false);
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

const theme = createMuiTheme(workmarketTheme.globalTheme);

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
