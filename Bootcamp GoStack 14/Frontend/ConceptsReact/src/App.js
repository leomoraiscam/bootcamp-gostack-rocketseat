import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title={'React'}>
        <ul>
          <li>HomePage</li>
        </ul>
      </Header>
      
      <Header title={'React Js'}>
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
        </ul>
      </Header>
    </>
  )
}

export default App;