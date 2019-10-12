import { Button, Layout } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import {
  makeSelectError,
  makeSelectLoading,
  makeSelectWords,
} from 'containers/App/selectors';

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

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <Button
            type='primary'
          >
            <FormattedMessage {...messages.next} />
          </Button>
        </Content>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  words: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  loading: makeSelectLoading(),
  words: makeSelectWords(),
});

export function mapDispatchToProps(dispatch) {
  return {
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomePage);
