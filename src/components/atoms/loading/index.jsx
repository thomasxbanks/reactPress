import React, { Fragment } from 'react';
import './style.scss';

const Loading = () => (
  <Fragment>
    <div className="loading" aria-label="Loading content" aria-live="assertive">
      <span />
    </div>
  </Fragment>
);

export default Loading;
