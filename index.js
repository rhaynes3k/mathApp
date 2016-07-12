const express = require('express');
const {json} = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const facebook = require('passport-facebook').Strategy;
const app = express();
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'keyboard dogg',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
const port = 3000;
const masterRoutes = require('./server/masterRoutes.js');
mongoUri = 'mongodb://localhost:27017/mathworld';
mongoose.connect(mongoUri);
app.use(express.static(__dirname + '/public'));
app.use(json());

masterRoutes(app);




app.listen(port, () => {
    console.log(`Ex is listening on port ${port}`);
});
