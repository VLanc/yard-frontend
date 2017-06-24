import React from 'react';
import logo from './compass-development-logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from "styled-components";

const Banner = styled.div`
  background: #161616;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  margin: 5rem auto;
  height: 131px;
`;

export default () => {
  return (
    <Banner>
      <Logo src={logo} />
    </Banner>
  );
};
