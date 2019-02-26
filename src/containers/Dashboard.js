import React from 'react';

import Layout from '../layouts';

import Title from '../components/Title';

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  handleTest = param => {
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

    console.log('test');
  };

  render() {
    return (
      <Layout>
        <Title title="Dashboard" />
      </Layout>
    );
  }
}
export default Dashboard;
