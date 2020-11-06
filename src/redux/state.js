import { fromJS } from 'immutable';

const state = {
	Settings: {
		columns: [
			fromJS({
				type: 'Text',
				textType: 'header',
				fixed: true,
				key: 'name',
				title: 'Name',
				textLookup: 'name',
				growPriority: 2,
			}),
			fromJS({
				type: 'Text',
				textType: 'header',
				fixed: true,
				key: 'dimension',
				title: 'Dimension',
				textLookup: 'dimension',
				growPriority: 1,
			}),
			fromJS({
				type: 'Text',
				textType: 'header',
				fixed: true,
				key: 'value',
				title: 'Value',
				textLookup: 'value',
				growPriority: 1,
			}),
		],
		dataList: fromJS([]),
	},
};

export default state;
