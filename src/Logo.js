import React from 'react';
import logo from './compass-development-logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from "styled-components";

const Banner = styled.div`
  background: black;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  padding: 5rem 31.875rem 5rem 31.875rem;
  width: 26.18125rem;
  height: 8.1875rem;
`;

export default () => {
  return (
    <Banner>
      <Logo src={logo} />
    </Banner>
  );
};
