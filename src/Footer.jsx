import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from './img/arrow.svg';

const Footer = styled.footer`
  margin-top: 6rem;
  background-color: #111;
  font-size: .875rem;
  font-weight: 300;
`;

const Title = styled.h4`
  color: #646971;
  margin: 0 0 .45rem;
  line-height: 1.4rem;

  &:first-child {
  margin-top: 2rem;
}
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1.4;
  margin-bottom: 0.7rem;
  margin-top: 0.7rem;

  &:last-child {
    margin-top: 1.2rem;
}
`;

const Delimiter = styled.hr`
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 0.125rem;
  border-style: solid;
  background-color: #3e4247;
`;

const NavLink = styled(Link)`
  display: block;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 0.35rem;

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const NavLinkAll = styled(Link)`
  margin-top: 0.8rem;
  display: block;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 0.35rem;
`;

const Arrow = styled.img`
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.25rem;
`;

const Copyright = styled.p`
  font-size: 11px;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1.2rem;
  margin-top: 5rem;
  margin-bottom: 1.75rem;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col lg={2}>
            <Title>ООО «Ярд»</Title>
            <Info>ОГРН 1175074002531</Info>
            <Info>ИНН 5036165365</Info>
            <Info>+7 (999) 821-14-88</Info>
          </Col>
          <Col lgOffset={2} lg={2}>
            <Delimiter></Delimiter>
            <Title>Жилые комплексы</Title>
            <nav>
              <NavLink to={"/"}>ВТБ Арена Парк</NavLink>
              <NavLink to={"/"}>Садовые кварталы</NavLink>
              <NavLink to={"/"}>Резиденция Монэ</NavLink>
              <NavLinkAll to={"/"}>Все ЖК Москвы
                <Arrow src={arrow}></Arrow>
              </NavLinkAll>
            </nav>
          </Col>
          <Col lg={2}>
            <Delimiter />
            <Title>Компания</Title>
            <nav>
              <NavLink to={"/"}>Команда</NavLink>
              <NavLink to={"/"}>О компании</NavLink>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col lgOffset={4} lg={8}>
            <Copyright>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</Copyright>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};
