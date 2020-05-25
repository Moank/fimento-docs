import React from "react";
import { Link } from "gatsby";

import styled from 'styled-components';

import logo from '../images/logo-black.svg';


const StyledHeader = styled('header')`
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,.1);
  box-shadow: 10px 10px 30px rgba(0,0,0,.1);

  z-index: 1;
  width: 100%;
  height: 60px;
  padding: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled('div')`
  width: 90%;
  max-width: 1280px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledItem = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  img {
    height: 40px;
    margin: 0;
  }

  h1 {
    font-size: 32px;
    color: #000;
    font-weight: 700;
    margin: 0 16px;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledContent>
      <StyledItem as={Link} to="/">
        <img src={logo} alt="logo"/>
        <h1>Fimento</h1>
      </StyledItem>
    </StyledContent>
  </StyledHeader>
)

export default Header
