import React, {useState} from 'react';
import styled from 'styled-components';
import ImageUploader from "../ImageUploader";
import {EditorImage} from "../Editor/Wysiwyg";

const BlogForm = ({blog = {}, onSubmit}) => {

  const [values, setValues] = useState({
    title: blog.title || '',
    content: blog.content || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  }

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onChangeThumbnail = (url) => {
    setValues({
      ...values,
      thumbnailUrl: url,
    })
  }

  const onChangeContentImage = (url) => {
    setValues({
      ...values,
      contentUrl: url,
    })
  }

  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <FormItem>
              <label htmlFor="title">제목</label>
              <input type="text" name="title" id="title" onChange={onChange} value={values.title}/>
            </FormItem>

            <FormItem>
              <label htmlFor="content">내용</label>
              <textarea name="content" id="content" cols="30" rows="20" onChange={onChange} value={values.content}/>
            </FormItem>

            <FormItem>
              <label>썸네일</label>
              <ImageUploader onChangeImage={onChangeThumbnail}/>
            </FormItem>

            <FormItem>
              <label>컨텐트</label>
              <ImageUploader onChangeImage={onChangeContentImage}/>
            </FormItem>

          <Button>
            추가하기
          </Button>
        </form>
    </Container>
  )
}

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 120px;
    height: 40px;
    margin-right: 10px;
    font-size: 15px;
    color: #777;
    flex-shrink: 0;
  }

  input, textarea {
    border: 1px solid #ddd;
    outline: 0;
    padding: 8px;
    font-size: 14px;
    color: #333;
    display: block;
    width: 100%;
  }

  input {
    height: 40px;
  }

  textarea {
    resize: none;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 40px;
  background: rgb(137, 119, 173);
  color: #fff;
  border-radius: 3px;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  cursor: pointer;
  margin: 0 auto;
`;
export default BlogForm;
