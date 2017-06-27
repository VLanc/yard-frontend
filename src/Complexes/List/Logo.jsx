import React from 'react';
import styled from 'styled-components';

import logo from './compass-development-logo.svg';

const Banner = styled.div`
  background: #161616;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  margin: 5rem auto;
  height: 131px;
`;

export default () =>
  (<Banner>
    <Logo src={logo} />
  </Banner>);
