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
import createSagaMiddleware from 'redux-saga';
import { workmarketTheme } from '@workmarket/theme-provider';
import ProductionContainer from '../src/Production';
import featureReducer from '../src/redux/reducers';
import getSwagger from './swagger';
import initialFetch from './initialFetch';
import createSetSwaggerAction from './redux/Global/actions/setSwagger';
import createUpdateGlobalAction from './redux/Global/actions/updateGlobal';
import globalReducer from './redux/Global/reducers';
import rootSaga from '../src/redux/sagas'

const reduxLogger = createLogger({ collapsed: true });



const sagaMiddlware = createSagaMiddleware();
const shellStore = createStore(
	combineReducers({
		typescript_boilerplate: featureReducer,
		Global: globalReducer,
	}),
	composeWithDevTools(applyMiddleware(reduxThunk, reduxLogger, sagaMiddlware)),
);

sagaMiddlware.run(rootSaga);

const apiClient = getSwagger()
	.then((swaggerClient) => {
		shellStore.dispatch(createSetSwaggerAction(swaggerClient));
		return swaggerClient;
	})
	.then((swaggerClient) => {
		initialFetch(swaggerClient)
			.then((initialState) => {
				shellStore.dispatch(createUpdateGlobalAction(initialState));
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
