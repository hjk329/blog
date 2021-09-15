import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import EditForm from "../components/EditForm";
import PageTitle from "../../shared/components/Title/PageTitle";
import {useHistory, useParams} from "react-router-dom";
import {editDocument, getDocument} from "../../../firebase/query";

const EditContainer = () => {
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

  const editBlog = (values) => {
    //블로그 수정
    editDocument('blog', id, values)
    history.push('/')
  }

    return (
        <Container>
          <PageTitle title={'글 수정하기'}/>
            <EditForm onSubmit={editBlog}
                      blog={blog}
            />
        </Container>
    )
}

const Container = styled.div`

`;
export default EditContainer;
