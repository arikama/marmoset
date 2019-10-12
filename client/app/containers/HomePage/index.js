import { Button as B, Layout, Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { loadRandomWords } from 'containers/App/actions';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectWords,
} from 'containers/App/selectors';
import request from 'utils/request';

import messages from './messages';

const Button = styled(B)`
  && {
    margin: 16px;
  }
`;

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
  display: flex;
  flexDirection: column;
  font-size: 64px;
  justifyContent: center;
  min-height: 200px;
  padding: 8px;
`;

class HomePage extends React.Component {
  state = {
    loading: true,
    word: '',
  }

  componentDidMount() {
    request('http://marmoset.arikama.co/api/words', {})
      .then((response) => {
        const words = response.words
        this.setState({ word: words[0] })
      })
      .then(() => {
        this.setState({ loading: false })
      })
  }

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
          <RandomWord>
            {
              this.state.loading ?
              <Spin /> : this.state.word
            }
          </RandomWord>
          <Button
            onClick={() => {
              this.setState({ loading: true })
              request('http://marmoset.arikama.co/api/words', {})
                .then((response) => {
                  const words = response.words
                  this.setState({ word: words[0] })
                })
                .then(() => {
                  this.setState({ loading: false })
                })
            }}
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
    dispatchLoadRandomWords: () => dispatch(loadRandomWords()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomePage);
