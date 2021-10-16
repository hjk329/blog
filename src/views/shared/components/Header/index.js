import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

  const user = useSelector(state => state.auth.user)
  return (
    <Container>
      <TopHeader>
        {
          user ?
            <UserInfoArea>
              <UserInfo>{user.email} 님 안녕하세요!</UserInfo>
              <ButtonSignOut>로그아웃</ButtonSignOut>
            </UserInfoArea>
            :
            <SignArea>
              <ButtonSignIn to={'/signin'}>로그인</ButtonSignIn>
              <ButtonSignUp to={'/signup'}>회원가입</ButtonSignUp>
            </SignArea>
        }
      </TopHeader>
      <MainHeader>
        <Logo to={'/'}>내돈내산</Logo>
      </MainHeader>
      <Nav>

      </Nav>
    </Container>
  )
}

const Container = styled.div`

`;

const Logo = styled(Link)`

`;

const TopHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 50px;
`;

const UserInfoArea = styled.div`
  display: flex;
  align-items: center;
`;

const UserInfo = styled.div`
  margin-right: 5px;
`;

const SignArea = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 0 15px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
  }
`;

const ButtonSignIn = styled(Link)`
  padding: 5px;
  transition: 0.3s;

  &:hover {
    color: rgb(137, 119, 173);
  }
`;

const ButtonSignUp = styled(Link)`
  padding: 5px;
  transition: 0.3s;

  &:hover {
    color: rgb(137, 119, 173);
  }
`;

const ButtonSignOut = styled(Link)`
  padding: 5px;
  transition: 0.3s;

  &:hover {
    color: rgb(137, 119, 173);
  }
`;

const MainHeader = styled.div`
  padding: 0 50px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`

`;
export default Header;
