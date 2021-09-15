import React from 'react';
import styled from 'styled-components';

import BlogForm from "../../shared/components/Form/BlogForm";

const EditForm = ({blog, onSubmit}) => {
  if (!blog?.title) return '...loading'

  return (
    <Container>
      <BlogForm
        blog={blog}
        onSubmit={onSubmit}/>
    </Container>
  )
}

const Container = styled.div`

`;
export default EditForm;
