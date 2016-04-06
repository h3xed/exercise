import React, { Component } from 'react';

import Footer from './Footer';
import Content from './Content';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
