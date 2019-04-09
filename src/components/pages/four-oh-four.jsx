import PageHeader from 'components/atoms/page-header';
import React, { Component, Fragment } from 'react';

class FourOhFour extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <PageHeader>Not found</PageHeader>
      </Fragment>
    );
  }
}

export default FourOhFour;
