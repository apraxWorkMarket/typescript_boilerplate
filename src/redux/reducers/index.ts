import { combineReducers } from 'redux';

// import all your reducers here
import Settings from './Settings/reducers';
import Counter from './Counter/reducers';

export default combineReducers({
	// Do not epxort the Global reducer, it is used by /dev.
	Settings,
	Counter,
	/* add reducers */
});
