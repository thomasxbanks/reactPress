import Archive from 'components/templates/archive';
import React, { Component, Fragment } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Archive />
      </Fragment>
    );
  }
}

export default Home;
