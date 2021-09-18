import React from 'react';
import styled from 'styled-components';

import BlogForm from "../../shared/components/Form/BlogForm";
import ButtonHome from "../../shared/components/Button/ButtonHome";

const AddForm = ({onSubmit}) => {
    return (
        <Container>
            <BlogForm onSubmit={onSubmit}/>
          <ButtonHome/>
        </Container>
    )
}

const Container = styled.div`

`;
export default AddForm;
