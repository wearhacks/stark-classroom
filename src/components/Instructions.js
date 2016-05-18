import React, { PropTypes } from 'react';
import Lesson from './Lesson';

class Instructions extends React.Component {
  componentDidMount() {
    $('.menu .item').tab();
  }

  render() {
    let { state, actions } = this.props,
        progress = state.progress;
    let lessons = state.lessons.filter((_, i) =>
        i <= progress.lesson
      ).map((lesson, i) =>
        <Lesson
          key={i}
          index={i}
          progress={state.progress}
          content={lesson.content}
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
