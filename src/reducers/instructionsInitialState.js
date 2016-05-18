const doc = require('../courses/web.json');

export default {
  progress: {
    chapter: 0,
    lesson: 0,
    exercise: 0,
    completed: false
  },
  lessons: doc.lessons
};
