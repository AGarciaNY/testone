import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import Nav from '../Nav/Nav'
const Div =styled.div`
background-color:red;
`
function App() {
  return (
    <Div >
      <h1>hi there</h1>
      <Nav/>
    </Div>
  );
}

export default App;
