import { Button, Layout } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const Description = styled.div`
  padding: 8px;
  text-align: center;
`;

const Content = styled(Layout.Content)`
  alignItems: center;
  display: flex;
  flexDirection: column;
  justifyContent: center;
`;

const RandomWord = styled.div`
  font-size: 64px;
  padding: 8px;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout>
        <Content>
          <h1>
            <FormattedMessage {...messages.appName} />
          </h1>
          <Description>
            <FormattedMessage {...messages.appDescription} />
          </Description>
          <RandomWord>Marmoset</RandomWord>
          <Button type='primary'>
            <FormattedMessage {...messages.next} />
          </Button>
        </Content>
      </Layout>
    );
  }
}
