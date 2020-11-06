
import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from '.';

describe('PageHeader', () => {
	it('should be defined', () => {
		const pageHeader = shallow(<PageHeader />);
		expect(pageHeader).toBeDefined();
	});
});
