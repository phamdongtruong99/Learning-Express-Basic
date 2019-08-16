const express = require('express');
const app = express();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const port = 3000;
const shortid = require('shortid');

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

const users = db.get('users').value();

app.get('/users', function(req, res) {
  res.render('users/index', {
    users: users,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
