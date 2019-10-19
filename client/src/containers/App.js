import { Button, Spin, Typography } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { requestWords } from '../actions/words'

const { Title } = Typography;

class App extends Component {
  render() {
    return (
      <div
        style={
          {
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }
        }
      >
        <Title>Marmoset</Title>
        <Spin />
        <Button
          onClick={e => {
            console.log(e)
            this.props.requestWords()
          }}
          type='primary'
        >
          Next
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestWords: () => {
      console.log('wtf?')
      dispatch(requestWords())
    },
  }
}

const mapStateToProps = state => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
