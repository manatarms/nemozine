import React from 'react';
import ReactDOM from 'react-dom';

import { createRenderer } from 'fela';
import { Provider } from 'react-fela';

import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Main from './assets/components/Main';
import Page from './assets/components/Page';

import { BrowserRouter } from 'react-router-dom';

const renderer = createRenderer();

class App extends React.Component {
  render() {
    return (
      <Page>
        <Header />
        <Main />
        <Footer />
      </Page>
    );
  }
}

ReactDOM.render(
  <Provider renderer={renderer}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
