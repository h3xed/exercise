import React, { Component, PropTypes } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import { kebabCase } from 'lodash';

import { setAnswer } from '../actions/exercises';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  exercise: PropTypes.object.isRequired,
  selectedExercise: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

class Item extends Component {
  constructor(props) {
    super(props);

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  handleAnswerClick(answerKey, e) {
    e.preventDefault();

    const { dispatch, id } = this.props;
    dispatch(setAnswer(id, answerKey));
  }

  buttonStyle() {
    const { exercise, id } = this.props,
          data = exercise[id];

    switch(data.correct) {
      case true:
        return 'success';
      case false:
        return 'danger';
      default:
        return 'default';
    }
  }

  isDisabled() {
    const { exercise, id } = this.props,
          data = exercise[id];

    return { disabled: !(typeof data.correct === 'undefined') }
  }

  render() {
    const { exercise, id, selectedExercise } = this.props,
          data = exercise[id];

    const imageContainer = (
      <div className="image-container">
        <img src={`/images/${data.image}`} />
      </div>
    );

    return (
      <div className={`exercise-item col-xs-4 ${kebabCase(selectedExercise)}`}>
        {
          (() => {
            if (selectedExercise === 'exerciseOne') {
              return imageContainer
            }
          })()
        }

        <ButtonToolbar>
          <DropdownButton
            id="exercise_dropdown"
            bsStyle={this.buttonStyle()}
            {...this.isDisabled()}
            title={(data.answer && exercise[data.answer].name) ||
              'Select a label'} >
            {
              Object.keys(exercise).map(key => {
                return (
                  <MenuItem
                    key={key}
                    eventKey={id}
                    onClick={this.handleAnswerClick.bind(null, key)} >
                    {exercise[key].name}
                  </MenuItem>
                )
              })
            }
          </DropdownButton>
        </ButtonToolbar>

        {
          (() => {
            if (selectedExercise === 'exerciseTwo') {
              return imageContainer
            }
          })()
        }
      </div>
    )
  }
}

Item.propTypes = propTypes;

export default Item;
