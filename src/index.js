import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index';

import './styles/init.scss';

const App = () => (
  <Router>
    <div>
      CAPA?
      <Routes />
    </div>
  </Router>
);


ReactDOM.render(<App />, document.getElementById('app'));
