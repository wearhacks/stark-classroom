import React, { PropTypes } from 'react';
import classnames from 'classnames';

class ProgressMeter extends React.Component {
  render() {
    const { state } = this.props,
          progress  = state.progress;
    const steps = state.lessons.map((lesson, i) => {
      const isCurrent = i == progress.lesson,
          isCompleted = i < progress.lesson;
      const className = classnames('step', {
        'completed': isCompleted,
        'current': isCurrent
      });
      return (
        <div key={i} className={className}>
          {lesson.content.title}
        </div>
      );
    });
    return (
      <div className="progress-meter">
        {steps}
      </div>
    );
  }
}

ProgressMeter.propTypes = {
  state: PropTypes.object.isRequired
};

export default ProgressMeter;
