import React, { PropTypes } from 'react';

import 'object-assign';
import classnames from 'classnames';

import Codemirror from 'react-codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import '../styles/codemirror-override.scss';

import 'semantic-ui/dist/semantic.js';

class Editor extends React.Component {
  componentDidMount() {
    $('.menu .item').tab();
    const fileNames = this.props.state.map((b) => b.fileName);
    const cms = fileNames.map((refName) => this.refs[refName].getCodeMirror());

    const setReadOnly = (cm) => {
      const markLinesR = (start, end) => cm.markText(
        {line: start, ch: 0}, {line: end}, {
          readOnly: true,
          className: 'readOnly'
        }
      );
      cm.eachLine((line) => {
        const num = line.lineNo();
        const isReadOnly = line.text.match(/^~/);
        line.text = isReadOnly ? line.text.replace('~', '') : line.text;
        if (isReadOnly) markLinesR(num, num);
      });
    };

    // TODO: Remove hacky timing fix.
    setTimeout(() => cms.forEach((editor) => {
      setReadOnly(editor);
      editor.refresh();
    }), 50);
  }

  updateBuffer(value) {
    this.props.actions.buffersUpdate({
      fileName: this.fileName,
      value
    });
  }

  render() {
    const { state } = this.props;
    const tabs = (
      <div className="ui top attached menu">
        {
          state.map((buffer, i) =>
            <a className={classnames('item', { 'active': buffer.isInitial })}
               data-tab={buffer.fileName}
               key={i}>{buffer.fileName}</a>
          )
        }
      </div>
    );
    const editors = state.map((buffer, i) =>
      <div className={classnames('ui', 'tab', { 'active': buffer.isInitial })}
           data-tab={buffer.fileName}
           key={i}>
        <Codemirror
          ref={buffer.fileName}
          value={buffer.value}
          onChange={
            this.updateBuffer.bind(Object.assign({}, this, {
              fileName: buffer.fileName
            }))
          }
          options={{
            lineNumbers: true,
            theme: 'dracula custom',
            mode: buffer.mimeType
          }} />
      </div>
    );
    return (
      <div className="editor">
        {tabs}
        {editors}
      </div>
    );
  }
}

Editor.propTypes = {
  state: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default Editor;
