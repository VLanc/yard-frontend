import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './img/compass-logo.svg';

const Header = styled.header`
  background: #fff;
  border: solid 1px #eaebf0;
  font-family: "Fira Sans";
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

const Logo = styled.img`
  margin-left: 1rem;
  width: 11rem;
  height: 1.6rem;
`;

const Nav = styled.nav`
  margin-top: .20rem;
`;

const NavLink = styled(Link)`
  margin-right: 1.10rem;
  margin-left: 1.10rem;
  font-size: 1rem;
  line-height: 1;
  text-decoration: none;
  color: #000;
`;

export default () =>
  (<Header>
    <Grid>
      <Content>
        <Logo src={logo} />
        <Nav>
          <NavLink to="#">Купить</NavLink>
          <NavLink to="#">Снять</NavLink>
          <NavLink to="#">Наши агенты</NavLink>
        </Nav>
      </Content>
    </Grid>
  </Header>);
