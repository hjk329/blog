import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import MainBlogList from "../components/MainBlogList";
import {getDocuments} from "../../../firebase/query";
import {useHistory} from "react-router-dom";


const MainContainer = () => {

  const [blogList, setBlogList] = useState([])
  const history = useHistory()

  const getBlogAll = async () => {
   const result = await getDocuments('blog')
    setBlogList(result)
    history.push('/')
  }

  useEffect(() => {
    getBlogAll()
  }, [])

    return (
        <Container>
          <MainBlogList data={blogList}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default MainContainer;
