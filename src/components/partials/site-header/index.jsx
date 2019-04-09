import Navigation from 'components/partials/navigation';
import React, { Component, Fragment } from 'react';
import './style.scss';

class SiteHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { children } = this.props;
    const toggleTheme = () => {
      document.querySelector('html').dataset.dark = document.querySelector('html').dataset.dark === 'false' ? 'true' : 'false';
    };
    return (
      <Fragment>
        <header className="site-header">
          <div className="inner">
            {children}
            <button type="button" onClick={toggleTheme}>Theme</button>
          </div>
        </header>
        <Navigation />
      </Fragment>
    );
  }
}

export default SiteHeader;
