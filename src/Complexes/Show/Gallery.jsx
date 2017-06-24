import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Images = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

const Image = styled.img`
  height: 25rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  margin: -3.725rem 0 0 1.3rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 2px;
  border: 0;
  background-color: #00779a;
  font-family: 'Fira Sans';
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  color: #ffffff;
`;

export default () => {
  return (
    <div>
      <Images>
        <Image src={process.env.PUBLIC_URL + "/img/image-1.png"} />
        <Image src={process.env.PUBLIC_URL + "/img/image-2.png"} />
        <Image src={process.env.PUBLIC_URL + "/img/image-3.png"} />
        <Image src={process.env.PUBLIC_URL + "/img/image-4.png"} />
        <Image src={process.env.PUBLIC_URL + "/img/image-5.png"} />
        <Image src={process.env.PUBLIC_URL + "/img/image-1.png"} />
        <Image src={process.env.PUBLIC_URL + "/img/image-2.png"} />
        <Image src={process.env.PUBLIC_URL + "/img/image-3.png"} />
      </Images>
      <Grid>
        <Row>
          <ButtonWrapper>
            <Button>41 фотография</Button>
          </ButtonWrapper>
        </Row>
      </Grid>
    </div>
  );
};
