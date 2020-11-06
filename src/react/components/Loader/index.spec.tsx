
import React from 'react';
import { shallow } from 'enzyme';
import Loader from '.';

describe('Loader', () => {
	it('should be defined', () => {
		const loader = shallow(<Loader />);
		expect(loader).toBeDefined();
	});
});
