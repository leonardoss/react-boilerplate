import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
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

const CustomStore = new Store();
export const store = CustomStore.store;

const App = () => (
  <Provider store={ CustomStore.store }>
    <MuiThemeProvider theme={ ThemeUi }>
      <CssBaseline>
        <Router>
          <Routes />
        </Router>
      </CssBaseline>
    </MuiThemeProvider>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById('app'));
