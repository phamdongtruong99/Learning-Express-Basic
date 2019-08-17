const db = require('../db');

module.exports.login = (req, res) => {
  res.render('auth/login'); // render login.pug
};
module.exports.postLogin = (req, res) => {
  const { email, password } = req.body;
  const user = db
    .get('users')
    .find({ email })
    .value();

  if (!user) {
    res.render('auth/login', {
      errors: ["User doesn't exist !"],
      values: req.body,
    });
    return;
  }

  if (user.password !== password) {
    res.render('auth/login', {
      errors: ['Wrong password'],
      values: req.body,
    });
    return;
  }
  res.cookie('userId', user.id)
  res.redirect('/users');
};
