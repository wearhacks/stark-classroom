import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import classnames from 'classnames';

class Lesson extends React.Component {
  render() {
    let {
      type,
      content,
      progress,
      exercises,
      actions,
      index
    } = this.props;
    let past = progress.lesson !== index
    let continueClassName = classnames('ui', 'bottom', 'attached', 'button', {
      'disabled': past
    });
    let buttonContinue = (
      (type === 'instruction') ?
        <div className={continueClassName} onClick={actions.lessonNext}>
          CONTINUE
          <i className="right chevron icon" />
        </div>
      :
        <div></div>
    );
    let listExercises = (
      (type === 'exercises') ?
        <div className="exercises">
          <ul>
            {
              exercises.map((exercise, i) =>
                <li key={i}>{exercise.body}</li>
              )
            }
          </ul>
        </div>
      :
        <div></div>
    );
    return (
      <div className={classnames('ui', 'card', { 'past': past })}>
        <div className="content">
          <a className="header">
            {content.title}
          </a>
          <div className="description">
            <Markdown source={content.body} escapeHtml={true} />
          </div>
          {listExercises}
        </div>
        {buttonContinue}
      </div>
    );
  }
}

Lesson.PropTypes = {
  content: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Lesson;
