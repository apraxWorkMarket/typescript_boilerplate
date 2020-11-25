import { List, Map } from 'immutable';
import SwaggerClient from '../api/types/SwaggerClient';
import initialSettingsState from './reducers/Settings/state';

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
  typescript_boilerplate: {
    Settings: {
      columns: Map<string, boolean | number | string>[];
      dataList: List<Map<string, string>>; //TODO(aprax) get type of List
	},
	Counter: {
		value: number,
	}
  },
  Global?: Map<string, boolean | SwaggerClient | Promise<User>>;
}

const initialState: State["typescript_boilerplate"] = {
	Counter: {
		value: 0,
	},
	Settings: initialSettingsState,
};

export default initialState;
