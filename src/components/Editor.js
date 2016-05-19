import React, { PropTypes } from 'react';

import 'object-assign';

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
    let fileNames = this.props.state.map((b) => b.fileName);
    let cms = fileNames.map((refName) => this.refs[refName].getCodeMirror());

    let setReadOnly = (cm) => {
      let markLinesR = (start, end) => cm.markText(
        {line: start, ch: 0}, {line: end}, {
          readOnly: true,
          className: 'readOnly'
        }
      );
      cm.eachLine((line) => {
        let num = line.lineNo();
        let isReadOnly = line.text.match(/^~/);
        line.text = isReadOnly ? line.text.replace('~', '') : line.text;
        if (isReadOnly) markLinesR(num, num);
      });
    }

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
    let { state } = this.props;
    let debug = (
      <div style={{ color: 'white' }}>
        <ul>
          {state.map((b, i) =>
            <li key={i}>
              name: {b.fileName}
              {b.value}
              <br />
            </li>
          )}
        </ul>
      </div>
    );
    let tabs = (
      <div className="ui top attached menu">
        {
          state.map((buffer, i) =>
            <a className={['item', (i === 0) ? 'active' : ''].join(' ')}
               data-tab={buffer.fileName}
               key={i}>{buffer.fileName}</a>
          )
        }
      </div>
    );
    let editors = state.map((buffer, i) =>
      <div className={['ui', 'tab', (i === 0) ? 'active' : ''].join(' ')}
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
