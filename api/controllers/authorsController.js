// set up 
var AuthorModel = require('../models/author');
var TodoModel = require('../models/todo');


// start author controller
var authorsController = {
  index: function(req, res){
    AuthorModel.find({}, function(err, docs){
      res.json(docs);
    });
  }
}

module.exports = authorsController;
