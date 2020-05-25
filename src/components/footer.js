import React from 'react';
import styled from 'styled-components';

import fimento from '../images/fimento.svg';


const StyledFooter = styled('footer')`
  width: 100%;
  background: #fafaf7;
  padding: 85px 0 30px;

  display: flex;
  flex-direction: column;
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

const StyledCopyright = styled('div')`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #212529;
`;

const Footer = () => (
  <StyledFooter>
    <StyledContent>
      <img src={fimento} alt="logo" />
    </StyledContent>
    <StyledCopyright>
      © copyright Fimento AB
    </StyledCopyright>
  </StyledFooter>
);

export default Footer;
