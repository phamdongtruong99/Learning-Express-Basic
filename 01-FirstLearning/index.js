const express = require('express');
const app = express();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const port = 3000;

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] }).write();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index', {
    message: 'everyOne',
  });
});
app.get('/users', function(req, res) {
  res.render('users/index', {
    users: db.get('users').value(),
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
  db.get('users')
    .push(req.body)
    .write();
  res.redirect('/users');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
