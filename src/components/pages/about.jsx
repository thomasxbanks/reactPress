import PageHeader from 'components/atoms/page-header';
import React, { Component, Fragment } from 'react';

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <PageHeader>About</PageHeader>
      </Fragment>
    );
  }
}

export default About;
