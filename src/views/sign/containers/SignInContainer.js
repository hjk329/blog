import React, {useState} from 'react';
import styled from 'styled-components';
import {signInWithEmailAndPassword} from "firebase/auth";

import {auth} from "../../../firebase/firebase";

import SignInForm from "../components/SignInForm";
import PageTitle from "../../shared/components/Title/PageTitle";
import SignMessage from "../components/SignMessage";

const SignInContainer = ({email, password}) => {

  const [errorCode, setErrorCode] = useState(null)

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
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
      <PageTitle title={'로그인'}/>
      <ResultMessage>
        {
          errorCode &&
          <SignMessage type={errorCode}/>
        }
      </ResultMessage>
      <SignInForm signIn={signIn}/>
    </Container>
  )
}

const Container = styled.div`

`;

const ResultMessage = styled.div`
  display: flex;
  justify-content: center;
`;
export default SignInContainer;
