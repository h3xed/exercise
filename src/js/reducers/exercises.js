import { merge } from 'lodash';

import * as types from '../constants/ActionTypes';

const initialState = {
  selectedExercise: 'exerciseOne',
  exerciseOne: {
    globe: {
      name: 'Globe',
      image: 'exercise_1/Icon_globe2.jpg'
    },
    book: {
      name: 'Book',
      image: 'exercise_1/Icon_book.jpg'
    },
    share: {
      name: 'Share',
      image: 'exercise_1/Icon_share.jpg'
    },
    chart: {
      name: 'Chart',
      image: 'exercise_1/Icon_graph.jpg'
    },
    conversation: {
      name: 'Conversation',
      image: 'exercise_1/Icon_speechBubble2.jpg'
    },
    gauge: {
      name: 'Gauge',
      image: 'exercise_1/Icon_gauge.jpg'
    }
  },
  exerciseTwo: {
    bring_learning_to_life: {
      name: 'Bring Learning to life',
      image: 'exercise_2/PE_Bringing_learning_to_life.jpg'
    },
    estabilish_a_common_standard: {
      name: 'Estabilish a common standard',
      image: 'exercise_2/PE_Reach_a_common_standard.jpg'
    },
    let_talent_speak_for_itself: {
      name: 'Let talent speak for itself',
      image: 'exercise_2/Time_talent_spoke_for_itself.jpg'
    }
  }
};

export default function exercises(state = initialState, action) {
  switch (action.type) {
    case types.SET_ANSWER:
      return merge({}, state, action.answer);

    case types.RESET_ANSWERS:
      let tmp = {};
      tmp[state.selectedExercise] = initialState[state.selectedExercise];
      return Object.assign({}, state, tmp);

    case types.TOGGLE_EXERCISE:
      return Object.assign({}, state, {
        selectedExercise: (state.selectedExercise === 'exerciseOne')
        ? 'exerciseTwo' : 'exerciseOne'
      });

    case types.CHECK_ANSWERS:
      return Object.assign({}, state, action.exercise);

    default:
      return state;
  }
}
