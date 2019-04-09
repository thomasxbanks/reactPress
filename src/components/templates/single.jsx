import Image from 'components/atoms/image';
import PageHeader from 'components/atoms/page-header';
import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import Parse from 'react-html-parser';
import Config from '../../helpers/config';

class Single extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const { match } = this.props;
    console.log(`${Config.apiEndpoint.base}/${Config.apiEndpoint.wordpress}/posts/?slug=${match.params.slug}&_embed`);
    fetch(`${Config.apiEndpoint.base}/${Config.apiEndpoint.wordpress}/posts/?slug=${match.params.slug}&_embed`)
      .then(r => r.json())
      .then((response) => {
        console.log(response[0]);
        this.setState({ post: response[0] });
      });
  }

  render() {
    const { post } = this.state;
    return (
      <Fragment>
        {post
          && (
          <Fragment>
            <Helmet
              title={`${Parse(post.title.rendered)} | scrummable`}
            />
            <article className="page">
              <Image title={Parse(post.title.rendered)[0]} img={post._embedded['wp:featuredmedia'][0]} />
              <PageHeader>{Parse(post.title.rendered)}</PageHeader>
              <div className="post_content">
                {Parse(post.content.rendered)}
              </div>
            </article>
          </Fragment>
          )
        }
      </Fragment>
    );
  }
}

export default Single;
