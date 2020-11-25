import reducer from './redux/reducers';
import Production from './Production';

const name = 'Typescript Boilerplate';

export { name, reducer, Production as container };
export const MyNinjaLord = "PirateBeef";

export default () => ({
	name,
	pageTitle: 'asdf',
	container: Production,
	reducer,
});
