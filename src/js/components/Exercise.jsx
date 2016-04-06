import React, { Component, PropTypes } from 'react';

import ExerciseItem from './ExerciseItem';
import ExerciseFooter from './ExerciseFooter';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedExercise: PropTypes.string.isRequired,
  exercise: PropTypes.object.isRequired
}

class Exercise extends Component {
  isResolved() {
    const { exercise } = this.props;
    return exercise[Object.keys(exercise)[0]].hasOwnProperty('correct');
  }

  title() {
    const { selectedExercise } = this.props;

    switch(selectedExercise) {
      case 'exerciseOne':
        return 'Exercise 1';
      case 'exerciseTwo':
        return 'Exercise 2';
      default:
        return '';
    }
  }

  render() {
    const { exercise, dispatch, selectedExercise } = this.props;

    return (
      <div className="exercise">
        <h1>{this.title()}</h1>
        <h3>{this.isResolved() ? 'Check your answers' : 'Label the images'}</h3>
        <div className="exercise-items">
          {
            Object.keys(exercise).map(key => {
              return <ExerciseItem
                key={key}
                id={key}
                {...this.props} />
            })
          }
        </div>
        <ExerciseFooter
          dispatch={dispatch}
          selectedExercise={selectedExercise}
          resolved={this.isResolved()} />
      </div>
    )
  }
}

Exercise.propTypes = propTypes;

export default Exercise;
