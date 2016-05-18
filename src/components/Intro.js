import React from 'react';
import { Link } from 'react-router';

const Intro = () => {
  return (
    <div className="intro">
      <h1>Welcome to the course.</h1>
      <p>
        We're about to teach you some things.
        <br />
        In the very near future, we'd also like to alter
        the content of this message.
      </p>
      <Link to="/course/web" className="ui right labeled massive accent icon button">
        <i className="right arrow icon"></i>
        Let's get started
      </Link>
    </div>
  );
};

export default Intro;
