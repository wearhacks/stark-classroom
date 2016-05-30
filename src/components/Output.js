import React, { PropTypes } from 'react';

class Output extends React.Component {
  componentDidMount() {
    this.iframe.contentWindow.jQuery = jQuery;
    this.updatePage();
  }

  componentDidUpdate() {
    this.updatePage();
  }

  updatePage() {
    const getBuffer = (name) =>
      this.props.state.find((b) => b.fileName === name).value;
    const buffers = {
      html: getBuffer('index.html'),
      css: getBuffer('style.css')
    };
    this.iframe.contentWindow.postMessage(buffers, 'http://localhost:3000');
  }

  render() {
    const chrome = (
      <div className="chrome">
        <div className="overlay" />
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
      </div>
    );
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
  state: PropTypes.array.isRequired
};

export default Output;
