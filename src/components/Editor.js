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
    let cms = [
      'editorHTML', 'editorCSS', 'editorJS'
    ].map((refName) => this.refs[refName].getCodeMirror());
    // TODO: Remove hacky timing fix.
    setTimeout(() => {
      cms.forEach((editor) => editor.refresh());
    }, 50);
  }

  updateHTML(value) {
    this.props.actions.buffersUpdate({
      fileName: 'index.html',
      value
    });
  }

  updateCSS(value) {
    this.props.actions.buffersUpdate({
      fileName: 'style.css',
      value
    });
  }

  updateJS(value) {
    this.props.actions.buffersUpdate({
      fileName: 'script.js',
      value
    });
  }

  render() {
    let optionsForMode = (m) => ({
      lineNumbers: true,
      theme: 'dracula custom',
      mode: m
    });
    let { state } = this.props;
    let initialFor = (targetName) =>
      state.find((b) => b.fileName === targetName).value;
    let debug =
      <div style={{ color: 'white' }}>
        <ul>
          {state.map((b) =>
            <li>
              name: {b.fileName}
              {b.value}
              <br />
            </li>
          )}
        </ul>
      </div>;
    return (
      <div className="editor">
        <div className="ui top attached menu">
          <a className="active item" data-tab="html">index.html</a>
          <a className="item" data-tab="css">style.css</a>
          <a className="item" data-tab="js">script.js</a>
        </div>
        <div className="ui active tab" data-tab="html">
          <Codemirror
            ref="editorHTML"
            value={initialFor('index.html')}
            onChange={this.updateHTML.bind(this)}
            options={optionsForMode('text/html')} />
        </div>
        <div className="ui tab" data-tab="css">
          <Codemirror
            ref="editorCSS"
            value={initialFor('style.css')}
            onChange={this.updateCSS.bind(this)}
            options={optionsForMode('css')} />
        </div>
        <div className="ui tab" data-tab="js">
          <Codemirror
            ref="editorJS"
            value={initialFor('script.js')}
            onChange={this.updateJS.bind(this)}
            options={optionsForMode('text/javascript')} />
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  state: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default Editor;
