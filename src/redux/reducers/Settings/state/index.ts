import { fromJS, Map } from 'immutable';

const initialState = {
	columns: [
		Map({
			type: 'Text',
			textType: 'header',
			fixed: true,
			key: 'name',
			title: 'Name',
			textLookup: 'name',
			growPriority: 2,
		}),
		Map({
			type: 'Text',
			textType: 'header',
			fixed: true,
			key: 'dimension',
			title: 'Dimension',
			textLookup: 'dimension',
			growPriority: 1,
		}),
		Map({
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
}
export default initialState;