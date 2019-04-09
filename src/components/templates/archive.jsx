import Loading from 'components/atoms/loading/index';
import PageHeader from 'components/atoms/page-header';
import Card from 'components/molecules/card/index';
import React, { Component, Fragment } from 'react';
import Config from '../../helpers/config';

class Archive extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const { filter } = this.props;
    this.getPosts(filter);
  }

  componentDidUpdate(previousProps) {
    const { filter } = this.props;
    if (previousProps.filter !== filter) {
      this.getPosts(filter);
    }
  }

  getPosts = (filter) => {
    console.log('************', filter);
    let endpoint = `${Config.apiEndpoint.base}/${Config.apiEndpoint.wordpress}/posts${Config.apiEndpoint.params}`;
    if (filter) {
      endpoint += `&categories=${filter}`;
    }
    fetch(endpoint)
      .then(r => r.json())
      .then((response) => {
        console.log(endpoint, response);
        for (let i = 0; i < response.length; i++) {
          const terms = response[i]._embedded['wp:term'][0];
          console.log(`terms for ${response[i].id}`, terms.map(term => term.slug));
        }
        this.setState({ posts: response });
      });
  }

  render() {
    const { posts } = this.state;
    const { title } = this.props;
    return (
      <Fragment>
        {!posts && <Loading />}
        {posts && (<PageHeader>{title || 'Latest Posts'}</PageHeader>)}
        <div className="tease_container">
          <section className="inner_grid">
            {posts && posts.map((post, index) => (
              <Card key={post.id} post={post} index={index} />
            ))}
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Archive;
