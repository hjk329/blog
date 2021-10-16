import React, {useState} from 'react';
import styled from 'styled-components';
import {createUserWithEmailAndPassword} from "firebase/auth";

import {auth} from "../../../firebase/firebase";

import PageTitle from "../../shared/components/Title/PageTitle";
import SignMessage from "../components/SignMessage";
import SignUpForm from "../components/SignUpForm";
import {useHistory} from "react-router-dom";

const SignUpContainer = ({email, password}) => {

  const [errorCode, setErrorCode] = useState(null)
  const history = useHistory()

  const signUp = ({email, password}) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history.goBack();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorCode(errorCode)
        console.log(errorMessage)
      });
  }

  return (
    <Container>
      <PageTitle title={'회원가입'}/>
      <ResultMessage>
        {
          errorCode &&
          <SignMessage type={errorCode}/>
        }
      </ResultMessage>
      <SignUpForm signUp={signUp}/>
    </Container>
  )
}

const Container = styled.div`

`;

const ResultMessage = styled.div`
  display: flex;
  justify-content: center;
`;
export default SignUpContainer;
