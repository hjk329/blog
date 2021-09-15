import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import OneBlog from "../components/OneBlog";
import {useHistory, useParams} from "react-router-dom";
import {deleteDocument, getDocument} from "../../../firebase/query";

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

  const history = useHistory()

  const onClickDelete = () => {
    const result = window.confirm('정말 삭제하시겠습니까?')
    if(result) {
      deleteBlog()
      history.push('/')
    }
  }
  const deleteBlog = async () => {
    return (await deleteDocument('blog', id))
  }
    return (
        <Container>
            <OneBlog blog={blog}
                     onClickDelete={onClickDelete}
            />
        </Container>
    )
}

const Container = styled.div`

`;
export default BlogContainer;
