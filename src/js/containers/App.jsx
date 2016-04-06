import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';
import Content from './Content';
import Header from './Header';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedExercise: PropTypes.string,
  exerciseOne: PropTypes.object
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Header {...this.props} />
        <Content {...this.props} />
        <Footer />
      </div>
    )
  }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
  const { exercises } = state;
  const { selectedExercise } = exercises;
  const exercise = exercises[selectedExercise];

  return {
    selectedExercise,
    exercise
  };
}

export default connect(mapStateToProps)(App);
