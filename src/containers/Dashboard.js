import React from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from '../layouts';

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  handleTest = param => {
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

    console.log('test');
  }

  render() {
    return (
      <Layout>
        <Typography variant="body2" gutterBottom>
          Dashboard
        </Typography>
      </Layout>
    );
  }
}
export default Dashboard;
