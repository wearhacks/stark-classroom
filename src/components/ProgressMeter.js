import React, { PropTypes } from 'react';

class ProgressMeter extends React.Component {
  render() {
    let { state } = this.props,
        progress = state.progress;
    let steps = state.lessons.map((lesson, i) => {
      let isCurrent   = i == progress.lesson,
          isCompleted = i < progress.lesson;
      let className = [
        'step',
        isCompleted ? 'completed' : isCurrent ? 'current' : ''
      ].join(' ');
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

export default ProgressMeter;
