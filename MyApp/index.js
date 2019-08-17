const express = require('express');
const cookieParser = require('cookie-parser'); // module for parsing cookies
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const authMiddlewares = require('./middlewares/auth.middlewares');

const app = express();
const db = require('./db');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('fdsfsdfsdf43432t4234'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('index', {
    message: 'every World! ',
  });
});

app.use('/users', authMiddlewares.requireAuth, userRoute);
app.use('/auth', authRoute); //using authRoute/ feauture login

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
