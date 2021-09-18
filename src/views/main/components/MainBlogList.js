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
            <PageTitle title={'내돈내산 리뷰 블로그'}
                        subTitle={'내 돈 (주고) 내(가) 산 물건들에 대한 리뷰를 공유합니다.'}
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
