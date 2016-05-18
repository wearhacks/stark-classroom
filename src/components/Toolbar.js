import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      LOGO
      <IndexLink to="/">Welcome</IndexLink>
      <Link to="/course/web">Courses</Link>
      <br/>
    </div>
  );
};

export default Toolbar;
