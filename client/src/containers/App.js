import { Button, Spin, Typography } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { requestWords } from '../actions/words'
import { Helmet } from '../components'

const { Text, Title } = Typography;

const Display = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 32px;
  min-height: 200px;
`

const Word = styled(Text)`
  font-size: 64px;
`

class App extends Component {
  componentDidMount() {
    if (this.props.words.length < 1) {
      this.props.requestWords()
    }
  }

  render() {
    return (
      <Display>
        <Helmet />
        <Title level={2}>Marmoset</Title>
        <Text>
          Click next to generate an awesome random word for your next project!
        </Text>
        <Result>
          {this.renderWord()}
        </Result>
        <Button
          onClick={this.props.requestWords}
          size='large'
          type='primary'
        >
          Next
        </Button>
      </Display>
    )
  }

  renderWord = () => {
    if (this.props.words.length < 1) {
      return <Spin />
    }
    return (
      <Word>{this.props.words[0]}</Word>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestWords: () => {
      dispatch(requestWords())
    },
  }
}

const mapStateToProps = state => {
  return {
    words: state.app.words,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
