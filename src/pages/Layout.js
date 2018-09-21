import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class Layout extends React.Component {
  render() {
    return (
      <Grid container className="main" spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <AppBar>
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Material desing UI
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Layout;
