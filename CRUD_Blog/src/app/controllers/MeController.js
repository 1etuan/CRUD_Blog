const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class Mecontroller {

  // GET / /stored/courses
  // storedCourses(req, res, next) {


  //   var courseQuery = Course.find({});

  //   if (req.query.hasOwnProperty('_sort'))
  // {
  //   courseQuery=courseQuery.sort({
  //     [req.query.column]: req.query.type
  //   })
  // }; 


  // courseQuery.then((courses) =>
  //       res.render('me/stored-courses', {
  //         courses: multipleMongooseToObject(courses),
  //       }),
  //     )
  //     .catch(next);
  // }
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => { res.render("me/stored-courses", {
          deletedCount: deletedCount,
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  // GET / /trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }

}
module.exports = new Mecontroller();
