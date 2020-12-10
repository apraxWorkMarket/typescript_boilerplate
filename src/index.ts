import reducer from './redux/reducers';
import Production from './Production';
import rootSaga from './redux/sagas';

const name = 'typescript_boilerplate';

export { name, reducer, Production as container };
export const MyNinjaLord = "PirateBeef";
export const MyPirateLord = "NinjaBeef";


const boilerplateRootSaga = rootSaga;
console.log("GIRAFFES AND ELEPHANTS");
export const RootSaga = boilerplateRootSaga;
export default () => ({
	name,
	pageTitle: 'asdf',
	container: Production,
	reducer,
});
