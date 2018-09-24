import React from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from '../pages/Layout';

class About extends React.Component {
  render() {
    return (
      <Layout>
        <Typography variant="body2" gutterBottom>
          About
        </Typography>
      </Layout>
    );
  }
}
export default About;
