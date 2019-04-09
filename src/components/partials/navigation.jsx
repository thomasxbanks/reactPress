import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Config from '../../helpers/config';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    const endpoint = `${Config.apiEndpoint.base}/${Config.apiEndpoint.wordpress}/categories`;
    fetch(endpoint)
      .then(r => r.json())
      .then((response) => {
        console.log(endpoint, response);
        this.setState({ categories: response });
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <nav>
        <ul>
          <li><NavLink activeStyle={{ background: 'red', color: 'white' }} to="/">Home</NavLink></li>
          <li><NavLink activeStyle={{ background: 'red', color: 'white' }} to="/about">About</NavLink></li>
          <li><NavLink activeStyle={{ background: 'red', color: 'white' }} to="/styleguide">Styleguide</NavLink></li>
          <li><NavLink activeStyle={{ background: 'red', color: 'white' }} to="/asdf">404</NavLink></li>
          {
            categories
            && categories.map(category => <li key={category.id}><NavLink to={`/category/${category.slug}`}>{category.name}</NavLink></li>)
          }
        </ul>
      </nav>
    );
  }
}

export default Navigation;
