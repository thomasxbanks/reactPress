import React, { Component, Fragment } from 'react';

class Content extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <Fragment>
        <p>
          {'Lorem ipsum dolor sit amet.'}
        </p>
        {/* { data && (
        <section className="tease_container">
          {data.map((datum, index) => (
            <article className="tease tease-post" key={`post-${datum.id}`} id={`post-${datum.id}-${index}`}>
              {datum._embedded['wp:featuredmedia'] && (
              <img src={datum._embedded['wp:featuredmedia'][0].source_url} alt={datum._embedded['wp:featuredmedia'][0].alt} />
              )}
              <header>
                <h3>
                  {Parser(datum.title.rendered)}
                </h3>
              </header>
              <footer>
                <NavLink to={`/posts/${datum.slug}`}>Read more</NavLink>
              </footer>
            </article>
          ))}
        </section>
        )} */}
      </Fragment>
    );
  }
}

export default Content;
