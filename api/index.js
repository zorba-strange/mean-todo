// set up
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var authorsController = require('./controllers/authorsController');
var cors = require('cors');
var app = express();

// connect to database
mongoose.connect('mongodb://localhost/todo');

// set and use
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(cors());

app.listen(8080, function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Api running on port 8080');
  }
});

// routes
app.get('/authors', authorsController.index);

