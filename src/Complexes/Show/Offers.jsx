import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

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

const Offer = styled.div`
  background-color: white;
  padding: 1.3rem 2rem;
`;

const OfferHeading = styled.h3`
  font-family: 'Philosopher';
  font-size: 20px;
  font-weight: bold;
  color: #3e4247;
  margin: 0 0 1.3rem 0;
`;

const Content = styled.div`
  margin: 0 0 1.5rem 0;
`;

const Title = styled.p`
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #a9afb6;
  margin: 0 0 0.45rem 0;
`;

const Value = styled.p`
  margin: 0;
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #3e4247;
  line-height: 1.5625rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 0.5rem;
`;

const Button = styled.button`
  padding-top: 12px;
  padding-left: 30px;
  padding-bottom: 12px;
  padding-right: 30px;
  font-family: 'Fira Sans';
  line-height: 1;
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  background-color: #000;
  border: 0;
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
              <Offer>
                <OfferHeading>1-комнатные квартиры</OfferHeading>
                <Content>
                  <Title>Площадь</Title>
                  <Value>от 59 до 120 м²</Value>
                </Content>
                <Content>
                  <Title>Стоимость</Title>
                  <Value>от 20.3 до 84.2 млн руб</Value>
                </Content>
                <Row center="lg">
                  <ButtonWrapper>
                    <Button>Посмотреть предложение</Button>
                  </ButtonWrapper>
                </Row>
              </Offer>
            </Col>
            <Col lg={4}>
              <Offer>
                <OfferHeading>2-комнатные квартиры</OfferHeading>
                <Content>
                  <Title>Площадь</Title>
                  <Value>от 59 до 120 м²</Value>
                </Content>
                <Content>
                  <Title>Стоимость</Title>
                  <Value>от 20.3 до 84.2 млн руб</Value>
                </Content>
                <Row center="lg">
                  <ButtonWrapper>
                    <Button>Посмотреть предложение</Button>
                  </ButtonWrapper>
                </Row>
              </Offer>
            </Col>
            <Col lg={4}>
              <Offer>
                <OfferHeading>3-комнатные квартиры</OfferHeading>
                <Content>
                  <Title>Площадь</Title>
                  <Value>от 59 до 120 м²</Value>
                </Content>
                <Content>
                  <Title>Стоимость</Title>
                  <Value>от 20.3 до 84.2 млн руб</Value>
                </Content>
                <Row center="lg">
                  <ButtonWrapper>
                    <Button>Посмотреть предложение</Button>
                  </ButtonWrapper>
                </Row>
              </Offer>
            </Col>
          </Row>
        </Features>
      </Grid>
    </Wrapper>
  );
};
