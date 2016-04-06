import React, { Component, PropTypes } from 'react';
import { Pager, PageItem, Button } from 'react-bootstrap';

import { toggleExercise, checkAnswers,
  resetAnswers } from '../actions/exercises';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedExercise: PropTypes.string.isRequired
}

class ExerciseFooter extends Component {
  constructor(props) {
    super(props);

    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  isNext() {
    const { selectedExercise } = this.props;
    return { disabled: selectedExercise === 'exerciseTwo' };
  }

  isPrev() {
    const { selectedExercise } = this.props;
    return { disabled: selectedExercise === 'exerciseOne' };
  }

  handleNavClick() {
    const { dispatch } = this.props;
    dispatch(toggleExercise());
  }

  handleCheckClick() {
    const { dispatch } = this.props;
    dispatch(checkAnswers());
  }

  handleResetClick() {
    const { dispatch } = this.props;
    dispatch(resetAnswers());
  }

  getActionButton() {
    if (this.props.resolved) {
      return <Button onClick={this.handleResetClick}>Try Again</Button>;
    } else {
      return <Button bsStyle="success" onClick={this.handleCheckClick}>Check answers</Button>;
    }
  }

  render() {
    return (
      <div className="exercise-footer">
        <Pager>
          <PageItem
            href="#"
            previous
            {...this.isPrev()}
            onSelect={this.handleNavClick} >&larr; Previous</PageItem>
          {this.getActionButton()}
          <PageItem
            href="#"
            next
            {...this.isNext()}
            onSelect={this.handleNavClick} >Next &rarr;</PageItem>
        </Pager>
      </div>
    )
  }
}

ExerciseFooter.propTypes = propTypes;

export default ExerciseFooter;
