import React from 'react';
import { createComponent } from 'react-fela';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Wrapper from './Wrapper';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import NotFound from './NotFound';

const MainWrapper = createComponent(props => ({
  paddingBottom: '200px',
  background: props.isHome ? null : '#f3f4ec'
}));

class Main extends React.Component {
  render() {
    const isHome = this.props.location.pathname === '/';

    return (
      <MainWrapper isHome={isHome}>
        <Wrapper width="1024px">
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/paintings" component={Gallery} />
              <Route exact path="/about" component={About} />
              <Route exact path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </main>
        </Wrapper>
      </MainWrapper>
    );
  }
}

export default withRouter(props => <Main {...props} />);
