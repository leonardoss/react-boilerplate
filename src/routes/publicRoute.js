import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class PublicRoute extends Component {
  render() {
    return <Route { ...this.props } />;
  }
}

PublicRoute.propTypes = {
};

export default withRouter(PublicRoute);
