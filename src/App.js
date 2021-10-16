import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "./firebase/firebase";
import {GlobalStyle} from "./style/GlobalStyle";
import Routes from "./views/Routes";
import Header from "./views/shared/components/Header";
import {setUser} from "./redux/auth/slice";
import {useHistory} from "react-router-dom";


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

  const history = useHistory()

  const logOut = () => {
    signOut(auth).then(() => {
      history.push('/')
      dispatch(setUser(null))
    }).catch((error) => {
      console.log('@@error', error)
    });
  }

  return (
    <Container>
      <GlobalStyle/>
      <Header logOut={logOut}/>
      <Routes/>
    </Container>
  )
}

const Container = styled.div`

`;
export default App;
