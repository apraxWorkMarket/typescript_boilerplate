import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { WMConfigurableTable } from '@workmarket/front-end-components-next';
import actions from '../../../redux/actions';
import initialState, { State } from '../../../redux/state';
import styles from './styles';
import { Dispatch } from 'redux';
import { SetDataListActionType } from '../../../redux/actions/setDataList';

export interface DispatchProps {
  initialize: Function
}

class Dashboard extends Component<State["bootstrap_4_1_1"]["Settings"] & DispatchProps> {
	componentDidMount () {
		const { initialize } = this.props;
		initialize();
  }

	render () {
    const { columns, dataList } = this.props;
		const dataSize = dataList ? dataList.size : 1;
		return (
			<div style={ styles }>
				<WMConfigurableTable
					columns={ columns }
					continueLoading={ false }
					dataList={ dataList }
					dataSize={ dataSize }
					footer={ false }
					fullSize
					loadEnd={ dataSize }
				/>
			</div>
		);
	}
}

const mapStateToProps = (state = {bootstrap_4_1_1: initialState}) => {
  const { columns, dataList } = state.bootstrap_4_1_1.Settings;
	return {
		columns,
		dataList,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<SetDataListActionType, State>) => ({
	initialize: () => dispatch(actions.initialFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
