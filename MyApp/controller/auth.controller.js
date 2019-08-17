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
    res.render('auth/create', {
      errors: ["User doesn't exist !"],
      values: req.body,
    });
    return;
  }

  if (user.password !== password) {
    res.render('auth/create', {
      errors: ['Wrong password'],
      values: req.body,
    });
    return;
  }
    res.redirect('/users');

};
