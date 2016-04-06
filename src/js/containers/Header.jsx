import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <img src="/images/common/logo_horizontal.png" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="#">
                    Exercise 1
                </a>
              </li>
              <li>
                <a href="#">
                    Exercise 2
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
