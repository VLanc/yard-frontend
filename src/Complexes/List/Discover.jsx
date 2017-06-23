import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-top: 4.3rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  line-height: 1.5;
  font-size: 1rem;
  color: #000;
`;

const Button = styled.button`
  border: 0;
  line-height: 1.4;
  font-size: 1rem;
  text-align: center;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  padding-top: 9px;
  padding-left: 31px;
  padding-bottom: 9px;
  padding-right: 31px;
  margin-bottom: 4rem;
  font-family: var(--fira);
  outline: none;
`;

export default () => {
  return (
      <Grid>
        <Content>
          <Col lg={8}>
          <Title>
            Discover Our New Developments
          </Title>
          <Text>
            Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.
          </Text>
          <Button>
            Contact The Team
          </Button>
        </Col>
        </Content>
      </Grid>
  );
};
