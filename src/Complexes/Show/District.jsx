import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import Nearby from "./Nearby";
import Location from "./Location";

export default () => {
  return (
    <div>
      <Nearby />
      <Location />
    </div>
  );
};
