import React from 'react';
import styled from 'styled-components';
import PageTitle from "../../shared/components/Title/PageTitle";
import {ContentContainer} from "../../shared/components/Layout/Layout.Styled";
import {Link} from "react-router-dom";


const OneBlog = ({blog}) => {
  return (
    <Container>
      <ContentContainer>
        <PageTitle title={'blog'}/>
        <Button to={`/edit/${blog.id}`}>수정하기</Button>
        <Title>{blog.title}</Title>
        <Content>{blog.content}</Content>
      </ContentContainer>
    </Container>
  )
}

const Container = styled.div`

`;

const Title = styled.div`
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
`;

const Content = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.8;
  white-space: pre-wrap;
`;

const Button = styled(Link)`
  width: 120px;
  height: 36px;
  background: #46cc35;
  color: #fff;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 auto;
`;
export default OneBlog;
