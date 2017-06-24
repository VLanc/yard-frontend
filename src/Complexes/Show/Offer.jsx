import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

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

export default props => {
  return (
    <Offer>
      <OfferHeading>{props.count}-комнатные квартиры</OfferHeading>
      <Content>
        <Title>Площадь</Title>
        <Value>от {props.square.min} до {props.square.max} м²</Value>
      </Content>
      <Content>
        <Title>Стоимость</Title>
        <Value>от {props.price.min} до {props.price.max} млн руб</Value>
      </Content>
      <Row center="lg">
        <ButtonWrapper>
          <Button>Посмотреть предложение</Button>
        </ButtonWrapper>
      </Row>
    </Offer>
  );
};
