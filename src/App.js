import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

import {onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase/firebase";
import {GlobalStyle} from "./style/GlobalStyle";
import Routes from "./views/Routes";
import Header from "./views/shared/components/Header";
import {setUser} from "./redux/auth/slice";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(setUser(user))

      } else {

      }
    });
  }, [])

  return (
    <Container>
      <GlobalStyle/>
      <Header/>
      <Routes/>
    </Container>
  )
}

const Container = styled.div`

`;
export default App;
