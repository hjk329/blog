import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import PageTitle from "../../shared/components/Title/PageTitle";
import {ContentContainer} from "../../shared/components/Layout/Layout.Styled";
import ButtonHome from "../../shared/components/Button/ButtonHome";


const OneBlog = ({blog, onClickDelete}) => {
  return (
    <Container>
      <ContentContainer>
        <PageTitle title={'내돈내산 오늘의 물건!'}/>
        <Buttons>
          <Button to={`/edit/${blog.id}`}>수정하기</Button>
          <DeleteButton onClick={onClickDelete}>삭제하기</DeleteButton>
        </Buttons>
        <Title>{blog.title}</Title>
        <Content>
          {blog.content}
        </Content>
      </ContentContainer>
      <ButtonHome/>
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

const Stars = styled.div`

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
  background: rgb(105, 119, 173);
  color: #fff;
  font-size: 13px;
  margin: 0 20px;
  border-radius: 6px;
`;

const DeleteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  background: rgb(105, 194, 306);
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;

`;
export default OneBlog;
