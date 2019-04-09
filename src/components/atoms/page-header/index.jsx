import React from 'react';
import './style.scss';

const PageHeader = (props) => {
  const { children } = props;
  return (
    <h1 className="page_header">
      <span className="heading">{children}</span>
    </h1>
  );
};

export default PageHeader;
