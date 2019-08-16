const express = require('express');
const app = express();
const db = require('./db');
const userRoute = require('./routes/user.route');

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

app.use('/users', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
