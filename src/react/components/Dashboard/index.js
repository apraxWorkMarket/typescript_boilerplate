import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { WMConfigurableTable } from '@workmarket/front-end-components-next';
import actions from '../../../redux/actions';
import initialState from '../../../redux/state';
import styles from './styles';

class Dashboard extends Component {
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

Dashboard.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.instanceOf(Map)),
	dataList: PropTypes.instanceOf(List),
	initialize: PropTypes.func,
};

const mapStateToProps = (state = initialState) => ({
	columns: state.bootstrap_4_1_1.Settings.columns,
	dataList: state.bootstrap_4_1_1.Settings.dataList,
});

const mapDispatchToProps = dispatch => ({
	initialize: () => dispatch(actions.initialFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
