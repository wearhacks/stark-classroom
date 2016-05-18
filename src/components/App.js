import React, { PropTypes } from 'react';
import Toolbar from './Toolbar';

const App = (props) => {
  return (
    <div id="wrap">
      <div className="bg"></div>
      <div id="classroom-full-wrapper">
        <Toolbar />
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
