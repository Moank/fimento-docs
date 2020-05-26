import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import GlobalStyle from './GlobalStyle';


const StyledLayout = styled('main')`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

const Layout = ({ children }) => (
  <StyledLayout>
    <GlobalStyle />
    <Header />
    <StyledContent>
      {children}
    </StyledContent>
    <Footer />
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
