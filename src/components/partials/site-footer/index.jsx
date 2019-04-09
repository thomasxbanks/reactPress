import moment from 'moment';
import React, { Component, Fragment } from 'react';
import './style.scss';

class SiteFooter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <footer className="site-footer">
        <div className="inner">
          <small>
            <Fragment>&copy;&nbsp;</Fragment>
            <time dateTime={moment().toISOString()}>{moment().format('Y')}</time>
            <Fragment>&nbsp;</Fragment>
            <address>scrummable</address>
            <Fragment>&nbsp;//&nbsp;</Fragment>
            {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rerum!'}
            <Fragment>&nbsp;//&nbsp;</Fragment>
            <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/legalcode">Creative Commons: CC BY-NC-ND 3.0</a>
          </small>
          {children}
        </div>
      </footer>
    );
  }
}

export default SiteFooter;
