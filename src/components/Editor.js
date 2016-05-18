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

const chunkHTML = `<!DOCTYPE html>
<html>
  <body>
    <div class="container">
      <table>
        <tr>
          <th>A header</th>
          <th>Second</th>
          <th>Last</th>
        </tr>
          <td>A cell</td>
          <td>Another</td>
          <td>Last</td>
        <tr>
        </tr>
      </table>
    </div>
  </body>
</html>`;

const chunkCSS = `body {
  background-color: red;
}

table {
  width: 300px;
  padding: 1em;
  margin-bottom: 0.5em;
}

table tr {
  margin: 0.5em 0;
}

table th {
  background-color: #CCCCCCC;
}

table td {
  background-color: #FAFAFA;
}`;

const chunkJS = `(function () {
  var a = {
    a: 'b', c: 33
  };
  var f = function () {
    return 7;
  }
  f();
})();`;

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

  render() {
    let optionsForMode = (m) => ({
      lineNumbers: true,
      theme: 'dracula custom',
      mode: m
    });
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
            value={chunkHTML}
            options={optionsForMode('text/html')} />
        </div>
        <div className="ui tab" data-tab="css">
          <Codemirror
            ref="editorCSS"
            value={chunkCSS}
            options={optionsForMode('css')} />
        </div>
        <div className="ui tab" data-tab="js">
          <Codemirror
            ref="editorJS"
            value={chunkJS}
            options={optionsForMode('text/javascript')} />
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Editor;
