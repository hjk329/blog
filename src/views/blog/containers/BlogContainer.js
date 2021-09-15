import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import OneBlog from "../components/OneBlog";
import {useParams} from "react-router-dom";
import {getDocument} from "../../../firebase/query";

const BlogContainer = () => {

  const {id} = useParams();

  const [blog, setBlog] = useState({})

  const getBlog = async () => {
    const result = await getDocument('blog', id)
    setBlog({
      ...result,
      id
    })
  }

  useEffect(() => {
    getBlog();
  }, [])

    return (
        <Container>
            <OneBlog blog={blog}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default BlogContainer;
