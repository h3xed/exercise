import { merge } from 'lodash';

import * as types from '../constants/ActionTypes';

function saveAnswer(answer) {
  return {
    type: types.SET_ANSWER,
    answer
  };
}

export function setAnswer(questionKey, answerKey) {
  return (dispatch, getState) => {
    const { exercises } = getState(),
          { selectedExercise } = exercises;

    let obj = {};
    obj[selectedExercise] = {};
    obj[selectedExercise][questionKey] = {
      answer: answerKey
    };

    dispatch(saveAnswer(obj));
  }
}

export function resetAnswers() {
  return {
    type: types.RESET_ANSWERS
  };
}

export function toggleExercise() {
  return {
    type: types.TOGGLE_EXERCISE
  };
}

function setCheckedAnswers(exercise) {
  return {
    type: types.CHECK_ANSWERS,
    exercise
  };
}

export function checkAnswers() {
  return (dispatch, getState) => {
    const { exercises } = getState(),
          { selectedExercise } = exercises;

    let object = merge({}, exercises[selectedExercise]),
        exercise = {};
    exercise[selectedExercise] = object;
    for (let key in object) {
      if (object[key].answer && object[key].answer === key) {
        object[key].correct = true;
      } else {
        object[key].correct = false;
      }
    }

    dispatch(setCheckedAnswers(exercise));
  };
}
