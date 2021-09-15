import React from 'react';
import styled from 'styled-components';

import {GlobalStyle} from "./style/GlobalStyle";
import Routes from "./views/Routes";


const App = () => {
  return (
    <Container>
      <GlobalStyle/>
      <Routes/>
    </Container>
  )
}

const Container = styled.div`

`;
export default App;
