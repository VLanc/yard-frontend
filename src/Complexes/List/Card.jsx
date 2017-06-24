import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:last-child {
    margin-bottom: 6rem;
  }

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 30.25rem;
  height: 21.875rem;
  flex-shrink: 0;
`;

const Content = styled.div`
  border-bottom-color: #646971;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  background-color: #fff;
`;

const Place = styled.p`
  margin-top: 1.4rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  font-family: Monaco, Consolas, 'Lucida Console', monospace;
  text-transform: uppercase;
  color: #646971;
`;

const Title = styled.h3`
  margin-top: 1.2rem;
  margin-left: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const Decscription = styled.p`
  margin-left: 1rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #000;
  padding-right: 6.25rem;
`;

export default props => {
  return (
    <Card to={`/complexes/${props.id}`}>
      <Image src={process.env.PUBLIC_URL + "/img/picture-" + props.id + ".png"} />
      <Content>
        <Place>{props.geo}</Place>
        <Title>{props.title}</Title>
        <Decscription>{props.children}</Decscription>
      </Content>
    </Card>
  );
};
