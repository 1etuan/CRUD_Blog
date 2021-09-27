const newsROuter = require('./news');
const meROuter = require('./me');
const coursesROuter = require('./courses');
const siteROuter = require('./site');

function route(app) {
  app.use('/news', newsROuter);
  app.use('/me', meROuter);
  app.use('/courses', coursesROuter);
  app.use('/', siteROuter);
}

module.exports = route;
