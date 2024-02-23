const express = require('express');
const mongodb = require('mongodb');
const checkToken = require('./middleware/checkToken');
const app = express();
const port = 3000;

const urlDatabase = 'mongodb://localhost:27017';
const dbName = 'myproject';

app.listen(port);

app.use(express.json());
app.use('/register', require('./router/register.router.js'));
app.use('/auth', require('./router/login.router.js'));
app.use('/user', checkToken, require('./router/user.router.js'));

app.get('/', (req, res) => {
    res.send('Hello World!');
    });




