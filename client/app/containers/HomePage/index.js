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

class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.dispatchLoadRandomWords()
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
              this.props.loading ?
              <Spin /> : this.props.words[0]
            }
          </RandomWord>
          <Button
            onClick={() => this.props.dispatchLoadRandomWords()}
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
