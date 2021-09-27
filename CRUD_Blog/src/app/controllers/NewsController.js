class Newcontroller {
  // [GET] / News
  index(req, res) {
    res.render('news');
  }

  // GET / news/:slug
  show(req, res) {
    res.send('newdetails');
  }
}

module.exports = new Newcontroller();
