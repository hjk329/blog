import React from 'react';
import styled from 'styled-components';

import BlogForm from "../../shared/components/Form/BlogForm";

const AddForm = ({onSubmit}) => {
    return (
        <Container>
            <BlogForm onSubmit={onSubmit}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default AddForm;
