import React, { PropTypes } from 'react';

class Output extends React.Component {
  componentDidMount() {
    this.iframe.contentWindow.jQuery = jQuery;
  }

  pm() {
    let html = `
      <h1>A heading coming from posty</h1>
      <h2>A sub coming from posty</h2>
    `;
    let css = `
      body {
        background-color: honeydew;
      }
    `;
    let js = `
      alert('local javascript');
    `;
    let buffers = { html, css, js };
    this.iframe.contentWindow.postMessage(buffers, 'http://localhost:3000');
  }

  render() {
    let chrome =
      <div className="chrome">
        <div className="overlay" onClick={this.pm.bind(this)}/>
        <div className="ui buttons small basic">
          <div className="ui button">
            <i className="ui icon left chevron" />
          </div>
          <div className="ui button">
            <i className="ui icon right chevron" />
          </div>
        </div>
        <div className="ui icon small input">
          <input type="text" placeholder="http://" />
        </div>
      </div>;
    return (
      <div className="output">
        {chrome}
        <iframe
          src="../iframe.html"
          id="output"
          ref={(ref) => this.iframe = ref}
          allow-same-origin
          allow-scripts>
        </iframe>
      </div>
    );
  }
}

Output.propTypes = {
};

export default Output;
