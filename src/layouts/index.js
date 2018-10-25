import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar, Toolbar, Typography, Grid, MenuList, MenuItem,
  ListItemText, ListItemIcon, Avatar,
} from '@material-ui/core';

import { FormatAlignJustify as AboutIcon, Home as DashIcon, AccountCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

import { withRouter } from 'react-router-dom';
import {compose} from "redux";
import {connect} from "react-redux";
import * as authActions  from '../actions/authActions';

class Layout extends React.Component {
  handleNavigation(route) {
    const { history } = this.props;
    history.push(route);
  }

  render() {
    const { children, user, signOut } = this.props;
    const initials = 'displayName' in user ? user.displayName.slice(0,2).toUpperCase() :  ''
    return (
      <Grid container className="main" spacing={ 16 }>
        <Grid item xs={ 12 }>
          <Grid container justify="center">
            <AppBar position="relative">
              <Toolbar>
                <Grid container justify="flex-end">
                  <Grid item xs={ 11 }>
                    <Typography
                      variant="title"
                      color="inherit">
                      nWRS - Auth
                    </Typography>
                  </Grid>
                  <Grid item xs={ 1 }>
                    <IconButton
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <Avatar onClick={signOut}>{initials}</Avatar>
                    </IconButton>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid container>
            <Grid item xs={ 2 }>
              <MenuList>
                <MenuItem onClick={ () => this.handleNavigation('/') }>
                  <ListItemIcon>
                    <DashIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </MenuItem>
                <MenuItem onClick={ () => this.handleNavigation('/about') }>
                  <ListItemIcon>
                    <AboutIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </MenuItem>
              </MenuList>
            </Grid>
            <Grid item xs={ 10 }>
              { children }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Layout.defaultProps = {
  signOut: () => {},
};
Layout.propTypes = {
  history: PropTypes.object,
  children: PropTypes.element.isRequired,
  signOut: PropTypes.func,
};

export default compose(withRouter, connect(state => ({
  user: state.AuthReducer.user,
  authenticated: state.AuthReducer.authenticated,
}), {
  ...authActions,
}))(Layout);
