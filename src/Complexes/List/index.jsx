/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';

import Discover from './Discover';
import Logo from './Logo';
import Card from './Card';

export default () =>
  (<div>
    <Helmet>
      <title>Compass - Main page</title>
    </Helmet>
    <BodyClassName className="complexes">
      <div>
        <Logo />
        <Discover />
        <Grid>
          <Card id={1} geo="SOUTH BEACH, SAN FRANCISCO" title="The Harrison">
            Beautifully appointed residences perched atop Rincon Hill, The
            Harrison offers unparalleled Bay Bridge and city views within
            steps of San Francisco’s greatest restaurants, shops, and The
            Embarcadero.
          </Card>
          <Card id={2} geo="MIDTOWN EAST, MANHATTAN" title="100 East 53rd Street">
            One Hundred East Fifty Third Street by Foster + Partners is a
            limited collection of modern residences in Midtown Manhattan's
            Cultural District. The 94 residences ranging from alcove lofts
            to four bedrooms within the 63-story tower are generously
            proportioned.
          </Card>
          <Card id={3} geo="NOLITA, MANHATTAN" title="152 Elizabeth">
            152 Elizabeth is an ultra-luxury condominium building—the
            first in New York City designed by Japanese master architect
            Tadao Ando. Located at the corner of Kenmare and Elizabeth
            Streets in Nolita, the 32,000-square-foot building will stand
            as a profound architectural statement and embrace the
            industrial character of the neighborhood.
          </Card>
        </Grid>
      </div>
    </BodyClassName>
  </div>);
