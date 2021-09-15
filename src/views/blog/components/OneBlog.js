import React from 'react';
import styled from 'styled-components';

import PageTitle from "../../shared/components/Title/PageTitle";
import {ContentContainer} from "../../shared/components/Layout/Layout.Styled";
import {Link} from "react-router-dom";


const OneBlog = ({blog, onClickDelete}) => {
  return (
    <Container>
      <ContentContainer>
        <PageTitle title={'blog'}/>
        <Buttons>
          <Button to={`/edit/${blog.id}`}>수정하기</Button>
          <DeleteButton onClick={onClickDelete}>삭제하기</DeleteButton>
        </Buttons>
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

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  background: #46cc35;
  color: #fff;
  font-size: 13px;
  margin: 0 20px;
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  background: #46cc35;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
`;
export default OneBlog;
