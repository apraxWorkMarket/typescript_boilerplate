
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore, { MockStore, } from 'redux-mock-store';
import initialState, { State } from '../../../redux/state';
import Dashboard, {DispatchProps} from '.';
import { fromJS, List, Map } from 'immutable';

describe('Dashboard', () => {
	let props: State["typescript_boilerplate"]["Settings"] & DispatchProps;
	let mockStore: State["typescript_boilerplate"];
	let store: MockStore<unknown>;
	beforeEach(() => {
		props = {
			initialize: jest.fn<any, any>(),
			columns: [
				Map({ fixed: true })
			],
			dataList: List([Map({ mockKey: 'mockValue' })]),
		};
		mockStore = initialState;
		store = configureMockStore<unknown>()(mockStore);
	});

	it('should be defined', () => {
		const dashboard = shallow(<Provider store={ store }><Dashboard { ...props } /></Provider>);
		expect(dashboard).toBeDefined();
	});
});
