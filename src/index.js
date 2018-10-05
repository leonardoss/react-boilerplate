import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './routes/index';
import './styles/init.scss';

import Store from './store';

const ThemeUi = createMuiTheme({
  palette: {
    primary: primaryColor,
  },
});

const App = () => (
  <Provider store={ Store }>
    <MuiThemeProvider theme={ ThemeUi }>
      <CssBaseline>
        <Router>
          <Routes />
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  </Provider>
);

// App.propTypes = {
//   store: PropTypes.object,
// }

ReactDOM.render(<App />, document.getElementById('app'));
