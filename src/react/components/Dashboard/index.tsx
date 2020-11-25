import React, { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { WMConfigurableTable } from '@workmarket/front-end-components-next';
import createInitialFetchAction from '../../../../dev/redux/thunks/initialFetch';
import { State } from '../../../redux/state';
import styles from './styles';
import { Dispatch } from 'redux';
import { SetDataListActionType } from '../../../redux/reducers/Settings/actions/types/setDataList';

export interface DispatchProps {
	initialize: () => void,
}

class Dashboard extends Component<State["typescript_boilerplate"]["Settings"] & DispatchProps> {
	componentDidMount() {
		const { initialize } = this.props;
		initialize();
	}

	render() {
		const { columns, dataList } = this.props;
		const dataSize = dataList ? dataList.size : 1;
		return (
			<div style={styles}>
				<WMConfigurableTable
					columns={columns}
					continueLoading={false}
					dataList={dataList}
					dataSize={dataSize}
					footer={false}
					fullSize
					loadEnd={dataSize}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state: State) => {
	const { columns, dataList } = state.typescript_boilerplate.Settings;
	return {
		columns,
		dataList,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<SetDataListActionType, State>) => ({
	initialize: () => dispatch(createInitialFetchAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
