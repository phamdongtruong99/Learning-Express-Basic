const db = require('../db');
const users = db.get('users').value();

exports.delete = (req, res) => {
  const id = req.params.id;
  const user = db
    .get('users')
    .remove({ id })
    .write();
  res.redirect('/users');
};
