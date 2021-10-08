import React from 'react';
import styled from 'styled-components';

import {MessageTypes} from "./MessageTypes";

const SignMessage = ({type}) => {
  const messageComponent = MessageTypes[type]
  return (
    <Container>
      {messageComponent}
    </Container>
  )
}

const Container = styled.div`

`;
export default SignMessage;
