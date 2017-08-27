import React from 'react';
import { createComponent } from 'react-fela';
import { withRouter } from 'react-router-dom';

import bgImg from '../images/home_bg.jpg';

const Page = createComponent(props => ({
  width: '100%',
  minHeight: '100%',
  height: props.location.pathname === '/' || props.location.pathname === '/404'
    ? '100vh'
    : null,
  background: props.location.pathname === '/'
    ? `url(${bgImg}) no-repeat center center fixed`
    : null,
  backgroundSize: 'cover',
  position: 'relative'
}));

export default withRouter(props => <Page {...props} />);
