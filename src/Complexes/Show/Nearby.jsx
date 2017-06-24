import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Wrapper = styled.section`
  background-color: #3e4247;
  padding-top: 4rem;
  padding-bottom: 13.125rem;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-family: 'Philosopher';
  font-size: 24px;
  font-weight: bold;
  color: #a9afb6;

  &:last-child {
    margin-top: 0.2rem;
}
`;

const Heading = styled.p`
  font-family: 'Philosopher';
  font-size: 48px;
  font-weight: bold;
  line-height: 1.25;
  color: #ffffff;
  margin: 3.1rem 0 3.1rem 0;
`;

const NearbyLink = styled(Link)`
  text-decoration: none;
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #00779a;
`;

const Arrow = styled.img`
  width: 0.7rem;
  height: 0.7rem;
  margin-left: 0.25rem;
`;

const Photo = styled.img`
  height: 560px;
`;

export default () => {
  return (
    <Wrapper>
      <Grid>
        <Row between="lg" middle="lg">
          <Col lg={6}>
            <Title>Якиманка</Title>
            <Heading>
              Исторический центр Москвы в двух <br />километрах от Кремля
            </Heading>
            <NearbyLink to="#">
              Гид по Якиманке<Arrow src="/img/arrow-nearby.svg" alt="" />
            </NearbyLink>
          </Col>
          <Col lg={6}>
            <Photo src="/img/Yakimanka.png" />
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  );
};
