import React, { PropTypes } from 'react';
import Lesson from './Lesson';

class Instructions extends React.Component {
  componentDidMount() {
    $('.menu .item').tab();
  }

  render() {
    const { state, actions } = this.props,
          progress = state.progress;
    const lessons = state.lessons.filter((_, i) =>
      i <= progress.lesson
    ).map((lesson, i) =>
      <Lesson
        key={i}
        index={i}
        progress={state.progress}
        state={lesson}
        actions={actions} />
    );
    return (
      <div className="instructions">
        {lessons}
      </div>
    );
  }
}

Instructions.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Instructions;
