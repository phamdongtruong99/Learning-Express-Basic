const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index', {
    message: 'everyOne',
  });
});
const users = [{ name: 'chung', id: 1 }, { name: 'ctien', id: 1 }];
app.get('/users', function(req, res) {
  res.render('users/index', {
    users: users,
  });
});

app.get('/users/search', function(req, res) {
  console.log(req.query);
  const q = req.query.q;
  const matchedUsers = users.filter(user => {
    return user.name.indexOf(q) !== -1;
  });
  res.render('users/index', {
    users: matchedUsers,
  });
});

app.get('/users/create', function(req, res) {
  res.render('users/create');
});

app.post('/users/create', function(req, res) {
  users.push(req.body);
  res.redirect('/users');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
