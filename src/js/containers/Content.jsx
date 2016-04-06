import React, { Component, PropTypes } from 'react';

import Exercise from '../components/Exercise';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedExercise: PropTypes.string.isRequired,
  exercise: PropTypes.object.isRequired
}

class Content extends Component {
  render() {
    return (
      <div className="content container">
        <Exercise {...this.props} />
      </div>
    )
  }
}

Content.propTypes = propTypes;

export default Content;
