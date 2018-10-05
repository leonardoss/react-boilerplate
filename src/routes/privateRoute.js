import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Route, Redirect, withRouter } from 'react-router-dom';

import * as actions from '../actions/userActions';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);

    this.debounce = null;
    this.renderPropComponent = this.renderPropComponent.bind(this);
  }

  renderPropComponent() {
    const { authenticated, component: Component } = this.props;
    let componentToRender;

    if (authenticated) {
      componentToRender = <Component {...this.props} />;
    } else {
      componentToRender = <Redirect to={`/auth/${this.props.location.search}`} />;
    }

    return componentToRender;
  }

  render() {

    return <Route render={ this.renderPropComponent } />;
  }
}

PrivateRoute.defaultProps = {
  authenticated: false,
};

PrivateRoute.propTypes = {
  history: PropTypes.object,
  component: PropTypes.func,
  location: PropTypes.object,
  authenticated: PropTypes.bool,
};

export default compose(withRouter, connect(state => ({
  user: state.UserReducer.user,
  authenticated: state.UserReducer.authenticated,
}), {
  ...actions,
}))(PrivateRoute);
