import React from 'react';
import styled from 'styled-components';

const PageTitle = ({title, subTitle}) => {
  return (
    <Container>
      <h2>{title}</h2>
      {
        subTitle &&
        <p>{subTitle}</p>
      }
    </Container>
  )
}

const Container = styled.div`
  margin: 50px 0;
  text-align: center;

  h2 {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    color: #999;
    line-height: 1.5;
    white-space: pre-wrap;
  }
`;
export default PageTitle;
