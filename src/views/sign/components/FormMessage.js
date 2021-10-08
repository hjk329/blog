import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const FormMessage = ({error, children}) => {
  return (
    <Container className={cn({error})}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  font-size: 12px;
  color: #18f;
  margin-top: 10px;
  &.error {
    color: #ff5252;
  }
`;

export default FormMessage;
