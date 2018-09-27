import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';


import Routes from './routes/index';
import './styles/init.scss';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const ThemeUi = createMuiTheme({
  palette: {
    primary: primaryColor,
  },
});


const App = () => (
  <Provider store={ store }>
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
