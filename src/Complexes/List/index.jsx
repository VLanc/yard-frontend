import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import BodyClassName from 'react-body-classname';
import { Grid } from 'react-flexbox-grid';

import Discover from './Discover';
import Logo from './Logo';
import Card from './Card';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    return fetch('https://api.jqestate.ru/v1/complexes?filter[state]=public')
      .then(response => response.json())
      .then((json) => {
        const complexes = json.items;
        this.setState({ complexes });
      });
  }

  render() {
    const { complexes = [] } = this.state;
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
              {complexes.map(complex =>
                (<Card
                  key={complex.id}
                  id={complex.id}
                  geo={`${complex.location.subLocalityName}, ${complex.location.street}`}
                  title={`${complex.name}`}
                  image={`https://images.jqestate.ru/${complex.images[0].id}-jqestate-512`}
                />),
              )}
            </Grid>
          </div>
        </BodyClassName>
      </div>
    );
  }
}

export default List;
