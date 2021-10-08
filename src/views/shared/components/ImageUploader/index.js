import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import {AiOutlinePlus} from "react-icons/ai";
import {RiDeleteBin6Line} from "react-icons/all";

import {uploadImage} from "../../../../firebase/query";

const ImageUploader = ({onChangeImage}) => {

  const inputRef = useRef(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0)
  const [finish, setFinish] = useState(false)

  const onChange = async (e) => {
    try {
      const file = e.target.files[0];
      const getUrl = (url) => {
        onChangeImage(url)
        setUrl(url)
      }
      await uploadImage(file, setProgress, getUrl);

      setTimeout(() => {
        setFinish(true)
      }, 1000)

    } catch (e) {
      console.log(e)
    }

  }
  const onClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  const onClickDelete = (e) => {
    e.stopPropagation();
    setUrl('')
    onChangeImage('')
  }
  return (
    <Container>
      <PrevImage onClick={onClick}>
        {
          url ?
            <>
              <img src={url} alt=""/>
              <ButtonDelete onClick={onClickDelete}>
                <RiDeleteBin6Line/>
              </ButtonDelete>
            </>
            : <AiOutlinePlus/>
        }
        {
          !!progress &&
          <Gauge style={{width: progress + '%'}}
                className={cn({finish})}
          />
        }
      </PrevImage>
      <FileInput type="file"
                 onChange={onChange}
                 ref={inputRef}
      />
    </Container>
  )
}

const Container = styled.div`

`;

const PrevImage = styled.div`
  position: relative;
  width: 90px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  background: #eee;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FileInput = styled.input`
  display: none !important;
`;

const ButtonDelete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  background: rgba(238, 238, 238, 0.4);
  cursor: pointer;
`;

const Gauge = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  transition: 0.2s;
  background: rgba(137, 119, 173, 0.5);
  &.finish {
    opacity: 0;
    transition: 0.2s 1s;
  }
`;
export default ImageUploader;
