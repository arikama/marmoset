import { Spin, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

function App() {
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
    </div>
  );
}

export default App;
