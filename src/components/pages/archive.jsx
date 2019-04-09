import Loading from 'components/atoms/loading/index';
import Archive from 'components/templates/archive';
import React, { Component, Fragment } from 'react';
import Config from '../../helpers/config';

class ArchivePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.getCategoryData();
  }

  componentDidUpdate(previousProps) {
    const { match } = this.props;
    const { slug } = match.params;
    const { match: prevMatch } = previousProps;
    const { slug: prevSlug } = prevMatch.params;
    console.log('**************', prevSlug, slug);
    if (prevSlug !== slug) {
      this.getCategoryData();
    }
  }

  getCategoryData = () => {
    const { match } = this.props;
    const taxonomy = match.params.taxonomy === 'category' ? 'categories' : match.params.taxonomy;
    const { slug } = match.params;
    console.log(match.params);
    const endpoint = `${Config.apiEndpoint.base}/${Config.apiEndpoint.wordpress}/${taxonomy}?slug=${slug}`;
    fetch(endpoint)
      .then(r => r.json())
      .then((response) => {
        console.log(endpoint, response);
        this.setState({ filter: response[0].id, title: response[0].name });
        const { filter, title } = this.state;
        this.setState({ content: <Archive filter={filter} title={title} /> });
      });
  }

  render() {
    const { content } = this.state;
    console.log('>>>>>>>>>>>>>>>>>>', content);
    return (
      <Fragment>
        {!content && <Loading />}
        {content && content}
      </Fragment>
    );
  }
}

export default ArchivePage;
