import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <img className="right" src="/images/common/pearson_logo.png" />
          <img className="left" src="/images/common/pearson_slogan.png" />
        </div>
      </footer>
    )
  }
}
