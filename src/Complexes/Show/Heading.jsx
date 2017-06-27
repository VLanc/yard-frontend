import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.6rem 0 0 0;
`;

const Blocks = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e1;
`;

const Block = styled.div`
  margin-right: 3rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-family: 'Philosopher';
  font-size: 24px;
  font-weight: bold;
  color: #3e4247;
`;

const Additional = styled.small`
  font-family: 'Fira Sans';
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
  margin: 1.6rem 0 0 0;
  line-height: 1.375rem;

  &:last-child {
    margin-top: 0.2rem;
  }
`;

export default () => (
  <Wrapper>
    <Grid>
      <Blocks>
        <Block>
          <Heading>950<br /></Heading>
          <Additional>предложений</Additional>
        </Block>
        <Block>
          <Heading>John McAslan + Partners<br /></Heading>
          <Additional>архитектор</Additional>
        </Block>
        <Block>
          <Heading>Группа «ПСН»<br /></Heading>
          <Additional>застройщик</Additional>
        </Block>
      </Blocks>
    </Grid>
  </Wrapper>
  );
