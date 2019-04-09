import Loading from 'components/atoms/loading/index';
import Config from 'helpers/config';
import React, { Component, Fragment, Suspense } from 'react';
import Helmet from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router-dom';

// const BaseLayout = React.lazy(() => import('components/templates/base'));
const BaseLayout = React.lazy(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('components/templates/base'), 5000));
}));
const Home = React.lazy(() => import('components/pages/home'));
const Archive = React.lazy(() => import('components/pages/archive'));
const About = React.lazy(() => import('components/pages/about'));
const Single = React.lazy(() => import('components/templates/single'));
const Styleguide = React.lazy(() => import('components/pages/styleguide'));
const FourOhFour = React.lazy(() => import('components/pages/four-oh-four'));

const PrivateRoute = ({ authorised, ...rest }) => (authorised
  ? (
    <Route
      {...rest}
      render={props => (<Component {...props} />)}
    />
  )
  : (
    <Route
      {...rest}
      component={props => (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
    />
  ));

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    const wordpressDataUrl = `${Config.apiEndpoint.base}/${Config.apiEndpoint.wordpress}/${Config.apiEndpoint.posts}${Config.apiEndpoint.params}`;
    return fetch(wordpressDataUrl)
      .then(r => r.json())
      .then((response) => {
        this.setState({ data: response.data });
      });
  }

  render() {
    const { data } = this.state;
    const authed = !!(localStorage.token && localStorage.token.length > 0);
    console.log('App', data);

    return (
      <Fragment>
        <Helmet>
          <title>scrummable</title>
          <meta name="description" content="Like showing the good jam to the man with the dry bread" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Suspense fallback={<Loading />}>
          <BaseLayout>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/posts/:slug" component={Single} />
                <Route exact path="/:taxonomy/:slug" component={Archive} />
                <Route exact path="/styleguide" component={Styleguide} />
                <PrivateRoute exact authorised={authed} path="/private-route" component={Styleguide} />
                <Route component={FourOhFour} />
              </Switch>
            </Suspense>
          </BaseLayout>
        </Suspense>
      </Fragment>
    );
  }
}

export default App;
