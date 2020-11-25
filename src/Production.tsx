import React from 'react';
import { connect } from 'react-redux';
import ConnectedApp from './App';
import Loader from './react/components/Loader';
import SwaggerClient from './api/types/SwaggerClient';
import { State } from './redux/state';

/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/forbid-prop-types */

interface ComponentProps {
  apiClient: SwaggerClient;
  store: any,
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
    isLoading: Boolean(state.Global!.get('isPerformingInitialLoad') && (state.Global!.get('swaggerClient') as SwaggerClient).execute),
  };
};

export default connect(mapStateToProps)(ProductionContainer);
