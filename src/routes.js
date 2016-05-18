import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Intro from './components/Intro';
import CourseContainer from './containers/CourseContainer';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Intro} />
    <Route path="course/web" component={CourseContainer}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
