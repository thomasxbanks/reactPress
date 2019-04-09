import React from 'react';
import Parse from 'react-html-parser';
import { NavLink } from 'react-router-dom';
import './style.scss';

const ReadMore = (props) => {
  const { title, slug } = props;
  return <NavLink className="read-more" title={`Continue reading ${Parse(title.rendered)}`} to={`/posts/${slug}`}>Read more</NavLink>;
};

export default ReadMore;
