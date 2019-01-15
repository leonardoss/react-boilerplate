import React from 'react';

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
        <h2>
          Dashboard
        </h2>
      </Layout>
    );
  }
}
export default Dashboard;
