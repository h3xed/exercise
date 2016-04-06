import React, { Component, PropTypes } from 'react';

import { toggleExercise } from '../actions/exercises';

const propTypes = {
  selectedExercise: PropTypes.string.isRequired
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(exercise, e) {
    e.preventDefault();

    const { dispatch, selectedExercise } = this.props;

    if (exercise !== selectedExercise) {
      dispatch(toggleExercise());
    }
  }

  getLinkClassName(exercise) {
    const { selectedExercise } = this.props;
    if (exercise === selectedExercise) {
      return 'active';
    } else {
      return '';
    }
  }

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
                <a
                  href="#"
                  className={this.getLinkClassName('exerciseOne')}
                  onClick={this.handleLinkClick.bind(null, 'exerciseOne')} >
                    Exercise 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={this.getLinkClassName('exerciseTwo')}
                  onClick={this.handleLinkClick.bind(null, 'exerciseTwo')} >
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

Header.propTypes = propTypes;

export default Header;
