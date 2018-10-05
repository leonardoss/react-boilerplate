import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  AppBar, Toolbar, Typography, Grid, Menu, MenuList, MenuItem,
  ListItemText, ListItemIcon
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import withStyles from '@material-ui/core/styles/withStyles';

import Auth from '@aws-amplify/auth'

import { FormatAlignJustify as AboutIcon, Home as DashIcon } from '@material-ui/icons';

import * as userActions from '../actions/userActions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  label: {
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '-0.5px',
  }
};

class Layout extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClose = route => {
    const { history } = this.props;
    history.push(route);
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    const { classes } = this.props;
    const { children, authenticated, user } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    console.log('this.props', this.props);
    console.log('authenticated', authenticated);
    return (
      <Grid container className="main" spacing={ 16 }>
        <Grid item xs={ 12 }>
          <Grid container justify="center">
            <AppBar position="relative">
              <Toolbar>
                <Typography variant="title" color="inherit" className={classes.grow}>
                  AWS Cognito PoC
                </Typography>
                {authenticated && (
                  <div>
                    <IconButton
                      aria-owns={open ? 'menu-appbar' : null}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                      classes={{
                        label: classes.label,
                      }}
                    >
                      Olá { user.username }&nbsp;
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                    </Menu>
                  </div>
                )}
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

Layout.propTypes = {
  history: PropTypes.object,
  children: PropTypes.element.isRequired,
  authenticated: PropTypes.bool,
  loginUser: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withRouter, connect(state => ({
  authenticated: state.UserReducer.authenticated,
  user: state.UserReducer.user
}), {
  ...userActions
}))(Layout);
