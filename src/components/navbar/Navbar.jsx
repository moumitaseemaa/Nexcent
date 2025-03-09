import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import NavLogo from "../../assets/Logo.png";
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <Background>
      <Container>
        <SideBySide>
          <Logo>
            <img src={NavLogo} alt="logo" />
          </Logo>
          <MenuItems>
            <NavItem />
          </MenuItems>
          <GroupButton>
            <Login>Login</Login>
            <SignUp>SignUp</SignUp>
          </GroupButton>
        </SideBySide>
      </Container>
    </Background>
  );
};

export default Navbar;

const Background = styled.div`
  background-color: #f5f7fa;
  padding: 22px 0;
`;

const SideBySide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 14%;
`;
const MenuItems = styled.div`
  width: 66%;
  display: flex;
  justify-content: center;
`;
const GroupButton = styled.div`
  width: 20%;
`;

const Login = styled.button`
  padding: 10px 20px;
  color: #4caf4f;
  border-radius: 5px;
  border: none;
  margin-right: 14px;
  font-size: 14px;
  font-weight: 500;
`;

const SignUp = styled.button`
  padding: 10px 20px;
  background: #4caf4f;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: 500;
`;
