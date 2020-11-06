import reducer from './redux/reducers';
// import store from './redux';
import Production from './Production';

const name = 'bootstrap_4_1_1';

export { name, reducer, Production as container };

export default () => ({
	name,
	container: Production,
	reducer,
});
