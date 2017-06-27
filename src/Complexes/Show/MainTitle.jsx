import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const MainTitle = styled.section`
  padding: 1.4rem 0 1rem 0;
  background-color: white;
`;

const Name = styled.h1`
  font-family: Philosopher;
  font-size: 32px;
  font-weight: bold;
  color: #3e4247;
  margin: 0;
  margin-top: 0.5rem;
`;

const Additional = styled.p`
  font-family: 'Fira Sans';
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
  margin: 0.8rem 0 0 0;
  line-height: 1.375rem;
`;

const ButtonWrapper = styled.div`
`;

const Button = styled.button`
  margin-top: 0;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-family: 'Fira Sans';
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  color: #00779a;
  border-radius: 2px;
  border: 1px solid #e0e0e1;
  background: transparent;
`;

export default () => (
  <MainTitle>
    <Grid>
      <Row between="lg">
        <Col lg>
          <Name>Жилой комплекс «Полянка/44»</Name>
          <Additional>
              Район Якиманка, улица Большая Полянка, дом 44 • 119180
            </Additional>
        </Col>
        <ButtonWrapper>
          <Button>В избранное</Button>
        </ButtonWrapper>
      </Row>
    </Grid>
  </MainTitle>
  );
