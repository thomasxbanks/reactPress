import Image from 'components/atoms/image/index';
import ReadMore from 'components/atoms/read-more/index';
import { stripTags } from 'helpers';
import React, { Component } from 'react';
import Parse from 'react-html-parser';
import { NavLink } from 'react-router-dom';
import './style.scss';

class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }

  generateContent(post) {
    if (this) {
      if (post.excerpt && post.excerpt.rendered.length > 0) {
        return Parse(post.excerpt.rendered);
      }
      if (post.content && post.content.rendered.length > 0) {
        return Parse(stripTags(post.content.rendered.split('</p>')[0]));
      }
    }
    return '';
  }

  render() {
    const { post, index } = this.props;
    return (
      <article key={post.id} className="tease" id={`post-${post.id}-${index}`}>
        {post._embedded['wp:featuredmedia'] && (
          <Image title={Parse(post.title.rendered)[0]} img={post._embedded['wp:featuredmedia'][0]} />
        )}
        <header>
          <h2 className="title">
            {Parse(post.title.rendered)}
          </h2>
        </header>
        <div className="content">
          {this.generateContent(post)}
        </div>
        <ReadMore {...post} />
        <footer>
          <nav className="category_pills">
            <ul>
              {post._embedded['wp:term'] && post._embedded['wp:term'].map(term => term.map(category => <li key={category.id}><NavLink to={`/category/${category.slug}`}>{category.name}</NavLink></li>))}
            </ul>
          </nav>

        </footer>
      </article>
    );
  }
}

export default Card;
