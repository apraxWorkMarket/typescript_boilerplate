import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedApp from './App';
import Loader from './react/components/Loader';

/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/forbid-prop-types */

class ProductionContainer extends React.Component {
	state = {
		initialized: false,
	};

	componentDidUpdate () {
		const { apiClient, isLoading, store } = this.props;
		const { initialized } = this.state;
		if (!initialized && !isLoading && apiClient && store) {
			this.setState({ initialized: true });
		}
	}

	render () {
		const { initialized } = this.state;

		return initialized
			? (
				<div style={ { height: '100%', minHeight: 'calc(100vh - 64px)', position: 'relative' } }>
					<ConnectedApp />
				</div>
			)
			: <Loader />;
	}
}

ProductionContainer.propTypes = {
	apiClient: PropTypes.object,
	isLoading: PropTypes.bool,
	store: PropTypes.object,
};

ProductionContainer.defaultProps = {
	isLoading: true,
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.Global.get('isPerformingInitialLoad'),
	};
};

export default connect(mapStateToProps)(ProductionContainer);
