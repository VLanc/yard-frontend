import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2.25rem 0 3.1rem 0;
`;

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-family: 'Philosopher';
  font-size: 24px;
  font-weight: bold;
  color: #3e4247;
`;

const Features = styled.div`
  margin-top: 1rem;
`;

const Feature = styled.dl`
  display: flex;
  margin: 0.5rem 0 0 0;

  &:first-child {
    margin-top: 0;
}
`;

const Title = styled.dt`
  width: 50%;
  line-height: 1.5625rem;
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #a9afb6;
  width: 50%;
`;

const Value = styled.dd`
  width: 50%;
  line-height: 1.5625rem;
  font-family: 'Fira Sans';
  font-size: 1rem;
  font-weight: 500;
  color: #3e4247;
  width: 50%;
`;

export default () => {
  return (
    <Wrapper>
      <Grid>
        <Heading>Характеристики</Heading>
        <Features>
          <Row>
            <Col lg={4}>
              <Feature>
                <Title>Количество квартир</Title>
                <Value>1 503</Value>
              </Feature>
              <Feature>
                <Title>Статус</Title>
                <Value>Квартиры</Value>
              </Feature>
              <Feature>
                <Title>Цены</Title>
                <Value>от 5.3 млн до 14.5 млн</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Title>Количество квартир</Title>
                <Value>1 503</Value>
              </Feature>
              <Feature>
                <Title>Количество квартир</Title>
                <Value>1 503</Value>
              </Feature>
              <Feature>
                <Title>Количество квартир</Title>
                <Value>1 503</Value>
              </Feature>
            </Col>
            <Col lg={4}>
              <Feature>
                <Title>Количество квартир</Title>
                <Value>1 503</Value>
              </Feature>
              <Feature>
                <Title>Количество квартир</Title>
                <Value>1 503</Value>
              </Feature>
              <Feature>
                <Title>Количество квартир</Title>
                <Value>1 503</Value>
              </Feature>
            </Col>
          </Row>
        </Features>
      </Grid>
    </Wrapper>
  );
};
