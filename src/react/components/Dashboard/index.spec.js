
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import initialState from '../../../redux/state';
import Dashboard from '.';

describe('Dashboard', () => {
	let props;
	let mockStore;
	let store;
	beforeEach(() => {
		props = {
			initialize: jest.fn(),
		};
		mockStore = initialState;
		store = configureMockStore()(mockStore);
	});

	it('should be defined', () => {
		const dashboard = shallow(<Provider store={ store }><Dashboard { ...props } /></Provider>);
		expect(dashboard).toBeDefined();
	});
});
