import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = (process.env.NODE_ENV === 'production')
	? createStore(rootReducer, applyMiddleware(...[thunkMiddleware]))
	: createStore(rootReducer, composeWithDevTools(
		applyMiddleware(...[thunkMiddleware, createLogger({ collapsed: true })]),
	));

export default store;
