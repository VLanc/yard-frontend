import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 0 3.5rem 0;
`;

const Content = styled.div`
  padding-top: 2.2rem;
  border-top: 1px solid #e0e0e1;
`;

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-family: 'Philosopher';
  font-size: 24px;
  font-weight: bold;
  color: #3e4247;

  &:last-child {
    margin-top: 0.2rem;
}
`;

const Blocks = styled.div`
  margin-top: 0.9rem;
  margin-bottom: 0.35rem;
`;

const Text = styled.p`
  margin: 0;
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #3e4247;
  line-height: 1.5625rem;
  margin-bottom: 0.35rem;
`;

export default () => {
  return (
    <Wrapper>
      <Grid>
        <Content>
          <Heading>Инфраструктура</Heading>
          <Blocks>
            <Row>
              <Col lg={2}>
                <Text>Бассейн</Text>
              </Col>
              <Col lg={2}>
                <Text>Детский сад</Text>
              </Col>
              <Col lg={2}>
                <Text>Частная школа</Text>
              </Col>
              <Col lg={2}>
                <Text>Бассейн</Text>
              </Col>
              <Col lg={2}>
                <Text>Детский сад</Text>
              </Col>
              <Col lg={2}>
                <Text>Частная школа</Text>
              </Col>
              <Col lg={2}>
                <Text>Частная школа</Text>
              </Col>
              <Col lg={2}>
                <Text>Частная школа</Text>
              </Col>
              <Col lg={2}>
                <Text>Частная школа</Text>
              </Col>
            </Row>
          </Blocks>
        </Content>
      </Grid>
    </Wrapper>
  );
};
