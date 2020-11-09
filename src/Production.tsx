import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedApp from './App';
import Loader from './react/components/Loader';
import SwaggerClient from './api/types/SwaggerClient';
import { State } from './redux/state';
import store from './redux';

/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/forbid-prop-types */

interface ComponentProps {
  apiClient: SwaggerClient;
  store: typeof store;
}

interface ReduxState {
  isLoading: boolean;
}

interface LocalState {
  initialized: boolean;
}
class ProductionContainer extends React.Component<ComponentProps & ReduxState, LocalState> {
  state = {
    initialized: false,
  };

  static defaultProps = {
    isLoading: true,
  };
  componentDidUpdate() {
    const { apiClient, isLoading, store } = this.props;
    const { initialized } = this.state;
    if (!initialized && !isLoading && apiClient && store) {
      this.setState({ initialized: true });
    }
  }

  render() {
    const { initialized } = this.state;

    return initialized
      ? (
        <div style={{ height: '100%', minHeight: 'calc(100vh - 64px)', position: 'relative' }}>
          <ConnectedApp />
        </div>
      )
      : <Loader />;
  }
}




const mapStateToProps = (state: State) => {
  return {
    isLoading: state.Global!.get('isPerformingInitialLoad') as boolean,
  };
};

export default connect(mapStateToProps)(ProductionContainer);
