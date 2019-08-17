const db = require('../db');
const md5 = require('md5');
console.log(md5('123456'));

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

  const hashPassword = md5(password);

  if (user.password !== hashPassword) {
    res.render('auth/login', {
      errors: ['Wrong password'],
      values: req.body,
    });
    return;
  }
  res.cookie('userId', user.id, {
    signed: true,
  });
  res.redirect('/users');
};
