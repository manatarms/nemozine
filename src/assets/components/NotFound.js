import React from 'react';
import { createComponent } from 'react-fela';

const H1 = createComponent(
  ({}) => ({
    fontSize: '25px',
    paddingTop: '30px',
    paddingBottom: '30px'
  }),
  'h1'
);

const NotFound = () => (
  <div><H1>Oops! We could not find the page you were looking for.</H1></div>
);

export default NotFound;
