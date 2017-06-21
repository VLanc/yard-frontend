import React from 'react';
import logo from './compass-logo.svg';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from "styled-components";

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

const Link = styled.a`
  margin-right: 1.10rem;
  margin-left: 1.10rem;
  text-decoration: none;
  color: black;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Content>
          <Logo src={logo} />
          <Nav>
            <Link href="#">Купить</Link>
            <Link href="#">Снять</Link>
            <Link href="#">Наши агенты</Link>
          </Nav>
        </Content>
      </Grid>
    </Header>
  );
};
