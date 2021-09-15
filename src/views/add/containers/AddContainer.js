import React from 'react';
import styled from 'styled-components';

import AddForm from "../components/AddForm";
import PageTitle from "../../shared/components/Title/PageTitle";
import {useHistory} from "react-router-dom";
import {addDocument} from "../../../firebase/query";

const AddContainer = () => {

  const history = useHistory()

  const addBlog = async (values) => {
    await addDocument('blog', values);
    history.push('/')
  }

  return (
    <Container>
      <PageTitle title={'새 글 작성'}/>
      <AddForm onSubmit={addBlog}/>
    </Container>
  )
}

const Container = styled.div`

`;
export default AddContainer;
