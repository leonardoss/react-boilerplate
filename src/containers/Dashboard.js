import React from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from '../pages/Layout';

class Dashboard extends React.Component {
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
