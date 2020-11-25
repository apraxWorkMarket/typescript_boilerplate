import React from 'react';
import ReactDOM from 'react-dom';
import {
	applyMiddleware,
	combineReducers,
	createStore,
} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { Map } from 'immutable';
import App from './App';
import reducer from './redux/reducers';

const store = createStore(
	combineReducers({
		typescript_boilerplate: reducer,
		Global: (state = Map({})) => {
			return state;
		},
	}),
	applyMiddleware(reduxThunk),
);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<Provider store={ store }>
			<App />
		</Provider>,
		div,
	);
	ReactDOM.unmountComponentAtNode(div);
});
