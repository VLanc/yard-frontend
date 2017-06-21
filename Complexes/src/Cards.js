import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from "styled-components";
import img1 from './1.png';
import img2 from './2.jpg';
import img3 from './3.jpg';

const Card = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

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

export default () => {
  return (
    <Grid>
      <Card>
        <Image src={img1} />
        <Content>
          <Place>SOUTH BEACH, SAN FRANCISCO</Place>
          <Title>764 Metropolitan Avenue</Title>
          <Decscription>The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory has been transformed into 83 individually unique and luxury loft apartments.</Decscription>
        </Content>
      </Card>
      <Card>
        <Image src={img2} />
        <Content>
          <Place>MIDTOWN EAST, MANHATTAN</Place>
          <Title>100 East 53rd Street</Title>
          <Decscription>One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</Decscription>
        </Content>
      </Card>
      <Card>
        <Image src={img3} />
        <Content>
          <Place>NOLITA, MANHATTAN</Place>
          <Title>152 Elizabeth</Title>
          <Decscription>152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</Decscription>
        </Content>
      </Card>
    </Grid>
  );
};
