const express = require('express');
const router = express.Router();

router.get('/search', function(req, res) {
  const q = req.query.q;
  const matchedUsers = users.filter(user => {
    return user.name.indexOf(q) !== -1;
  });
  res.render('users/index', {
    users: matchedUsers,
  });
});

router.get('/create', function(req, res) {
  res.render('users/create');
});

router.get('/users/:id', function(req, res) {
  const id = Number(req.params.id);
  const user = db
    .get('users')
    .find({ id: id })
    .value();
  res.render('/view', {
    user: user,
  });
});
router.post('/create', function(req, res) {
  db.get('users')
    .push(req.body)
    .write();
  res.redirect('/users');
});

module.exports = router;
