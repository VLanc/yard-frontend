import React from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';

import MainTitle from './MainTitle';
import Gallery from './Gallery';
import TotalInformation from './TotalInformation';
import OffersList from './OffersList';
import District from './District';

export default () =>
  (<div>
    <Helmet>
      <title>Compass - ЖК  &laquoПолянка/44 &laquo</title>
    </Helmet>
    <BodyClassName className="complex">
      <div>
        <MainTitle />
        <Gallery />
        <TotalInformation />
        <OffersList />
        <District />
      </div>
    </BodyClassName>
  </div>);
