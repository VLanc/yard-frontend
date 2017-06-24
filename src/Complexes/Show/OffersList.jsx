import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Offer from "./Offer";

const Wrapper = styled.section`
  padding: 4rem 0 4.1rem 0;
  background-color: #f4f5f9;
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

const Features = styled.div`
  margin-top: 1.25rem;
`;

export default () => {
  return (
    <Wrapper>
      <Grid>
        <Row center="lg">
          <Heading>Предложения в ЖК «Полянка/44»</Heading>
        </Row>
        <Features>
          <Row>
            <Col lg={4}>
              <Offer
                count={1}
                square={{min:59, max:120}}
                price={{min:20.3, max:84.2}}
              />
            </Col>
            <Col lg={4}>
              <Offer
                count={2}
                square={{min:59, max:120}}
                price={{min:20.3, max:84.2}}
              />
            </Col>
            <Col lg={4}>
              <Offer
                count={3}
                square={{min:59, max:120}}
                price={{min:20.3, max:84.2}}
              />
            </Col>
          </Row>
        </Features>
      </Grid>
    </Wrapper>
  );
};
