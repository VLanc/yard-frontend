import React, { Component } from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import Heading from "./Heading";
import Features from "./Features";
import Description from "./Description";
import Infrastructure from "./Infrastructure";

export default () => {
  return (
    <div>
      <Heading />
      <Features />
      <Description />
      <Infrastructure />
    </div>
  );
};
