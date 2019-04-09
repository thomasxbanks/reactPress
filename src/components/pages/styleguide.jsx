import PageHeader from 'components/atoms/page-header';
import React, { Component, Fragment } from 'react';
import Parse from 'react-html-parser';
import Config from '../../helpers/config';

class Styleguide extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const endpoint = `${Config.apiEndpoint.base}/${Config.apiEndpoint.wordpress}/pages?slug=styleguide`;
    fetch(endpoint)
      .then(r => r.json())
      .then((response) => {
        console.log(endpoint, response);
        this.setState({ page: response[0] });
      });
  }

  render() {
    const { page } = this.state;
    return (
      <Fragment>
        {page
          && (
          <Fragment>
            <PageHeader>{Parse(page.title.rendered)}</PageHeader>
            <article className="post_content">
              <div>
                {Parse(page.content.rendered)}
              </div>
            </article>
          </Fragment>
          )
        }
      </Fragment>
    );
  }
}

export default Styleguide;
