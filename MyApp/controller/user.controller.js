const db = require('../db');
const shortid = require('short-id');
const users = db.get('users').value();

exports.index = (req, res) => {
  res.render('users/index', {
    users: users,
  });
};

exports.search = (req, res) => {
  const q = req.query.q;
  const matchedUsers = users.filter(user => {
    return user.name.indexOf(q) !== -1;
  });
  res.render('users/index', {
    users: matchedUsers,
  });
};

exports.create = (req, res) => {
  console.log(req.cookies);
  res.render('users/create');
};

exports.get = (req, res) => {
  const id = req.params.id;
  const user = db
    .get('users')
    .find({ id })
    .value();
  res.render('users/view', {
    users: user
  });
};

exports.postCreate = (req, res) => {
  const reqBody = req.body;
  reqBody.id = shortid.generate();
  db.get('users')
    .push(reqBody)
    .write();
  res.redirect('/users');
};
