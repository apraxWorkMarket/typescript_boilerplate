import { fromJS, List, Map } from 'immutable';
import SwaggerClient from '../api/types/SwaggerClient';

interface User {
  user: string;
  companyId: string;
}

interface LargeUser {
  userInfo: {
    email: 'mockEmail@example.com',
    fullName: 'mockFullName'
  }
}
export interface State {
  bootstrap_4_1_1: {
    Settings: {
      columns: Map<string, boolean | number | string>[];
      dataList: List<Map<string, string>>; //TODO(aprax) get type of List
    },
  },
  Global?: Map<string, boolean | SwaggerClient | Promise<User>>;
}

const state: State["bootstrap_4_1_1"] = {
	Settings: {
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
  },
};

export default state;
