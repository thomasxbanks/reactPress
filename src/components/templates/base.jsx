import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import SiteFooter from '../partials/site-footer';
import SiteHeader from '../partials/site-header';

class BaseLayout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Helmet
          title="scrummable"
        />
        <SiteHeader>
          <strong>scrummable</strong>
        </SiteHeader>
        <main>
          {children}
        </main>
        <SiteFooter />
      </Fragment>
    );
  }
}
export default BaseLayout;
