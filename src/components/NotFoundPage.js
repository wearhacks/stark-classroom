import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      404 Page Not Found
      <Link to="/">Back to start!</Link>
    </div>
  );
};

export default NotFoundPage;
