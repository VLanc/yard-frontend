import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import BodyClassName from "react-body-classname";

import MainTitle from "./MainTitle";
import Gallery from "./Gallery";
import TotalInformation from "./TotalInformation";
import Offers from "./Offers";

export default props => {
  return (
    <div>
      <Helmet>
        <title>Compass - ЖК "Полянка/44"</title>
      </Helmet>
      <BodyClassName className="complex">
        <div>
          <MainTitle />
          <Gallery />
          <TotalInformation />
          <Offers />
        </div>
      </BodyClassName>
    </div>
  );
};
