import React, { Component } from "react";
import { Helmet } from "react-helmet";
import BodyClassName from "react-body-classname";
import { Grid, Row, Col } from "react-flexbox-grid";

import Discover from "./Discover";
import Logo from "./Logo";
import Card from "./Card";

export default () => {
  return (
    <div>
      <Helmet>
        <title>Compass - Main page</title>
      </Helmet>
      <BodyClassName className="complexes">
        <div>
          <Logo />
          <Discover />
          <Grid>
            <Card
              id={1}
              geo="SOUTH BEACH, SAN FRANCISCO"
              title="764 Metropolitan Avenue"
            />
            <Card
              id={2}
              geo="MIDTOWN EAST, MANHATTAN"
              title="100 East 53rd Street"
            />
            <Card
              id={3}
              geo="NOLITA, MANHATTAN"
              title="152 Elizabeth"
            />
          </Grid>
        </div>
      </BodyClassName>
    </div>
  );
};
