import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import classnames from 'classnames';

class Lesson extends React.Component {
  render() {
    const {
      type,
      content,
      progress,
      exercises,
      actions,
      index
    } = this.props;
    const past = progress.lesson !== index;
    const continueClassName = classnames('ui', 'bottom', 'attached', 'button', {
      'disabled': past
    });
    const buttonContinue = (
      (type === 'instruction') ?
        <div className={continueClassName} onClick={actions.lessonNext}>
          CONTINUE
          <i className="right chevron icon" />
        </div>
      :
        <div></div>
    );
    const listExercises = (
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

Lesson.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  exercises: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default Lesson;
