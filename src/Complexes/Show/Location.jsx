import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: -9.625rem;
  margin-bottom: 3.45rem;
`;

const LocationMap = styled.img`
  width: 100%;
  height: 306px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
`;

const Block = styled.div`
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-bottom: solid 1px #e0e0e1;
`;

const Name = styled.p`
  margin: 0;
  font-family: 'Fira Sans';
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
`;

const Distance = styled.p`
  margin: 0.55rem 0 0 0;
  font-family: 'Fira Sans';
  font-size: 16px;
  line-height: 1.38;
  color: #a9afb6;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col lg={6}>
          <LocationMap src={`${process.env.PUBLIC_URL}/img/map.png`} />
        </Col>
        <Col lg={6}>
          <Block>
            <Content>
              <Name>Красный октябрь</Name>
              <Distance>24 минуты, 6 км</Distance>
            </Content>
            <Content>
              <Name>World Class</Name>
              <Distance>2 минуты, 300 м</Distance>
            </Content>
            <Content>
              <Name>Третьяковская галерея</Name>
              <Distance>14 минут, 4 км</Distance>
            </Content>
          </Block>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
  );
