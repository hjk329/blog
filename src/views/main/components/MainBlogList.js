import React from 'react';
import styled from 'styled-components';

import GridList from "../../shared/components/List/GridList";
import BlogItem from "../../shared/components/Item/BlogItem";
import {ContentContainer} from "../../shared/components/Layout/Layout.Styled";
import PageTitle from "../../shared/components/Title/PageTitle";
import ButtonAdd from "../../shared/components/Button/ButtonAdd";

const MainBlogList = ({data =[]}) => {
    return (
        <Container>
          <ContentContainer>
            <PageTitle title={'Blog'}
                        subTitle={'전체 블로그 리스트 페이지입니다. 하나하나 소중합니다.'}
            />
            <GridList data={data}>
              {(item, index) => <BlogItem index={index} item={item}/>}
            </GridList>
          </ContentContainer>
          <ButtonAdd/>
        </Container>
    )
}

const Container = styled.div`

`;
export default MainBlogList;
