import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';

class Lesson extends React.Component {
  render() {
    let { content, progress, actions, index } = this.props;
    let past = progress.lesson !== index
    let continueClassName = [
      'ui', 'bottom', 'attached', 'button',
       past ? 'disabled' : ''
    ].join(' ');
    let cardClassName = [
      'ui', 'card',
      past ? 'past' : ''
    ].join(' ');
    return (
      <div className={cardClassName}>
        <div className="content">
          <a className="header">
            {content.title}
          </a>
          <div className="description">
            <Markdown source={content.body} escapeHtml={true} />
          </div>
        </div>
        <div className={continueClassName} onClick={actions.lessonNext}>
          CONTINUE
          <i className="right chevron icon" />
        </div>
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
