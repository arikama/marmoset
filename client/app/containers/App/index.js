import { Layout } from 'antd';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Layout>
        {React.Children.toArray(this.props.children)}
      </Layout>
    );
  }
}
