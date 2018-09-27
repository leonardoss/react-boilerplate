import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from '../pages/Layout';

const theme = createMuiTheme({
  palette: {
    primary: primaryColor
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Layout />
        </CssBaseline>
      </MuiThemeProvider>
    );
  }
}

export default App;
