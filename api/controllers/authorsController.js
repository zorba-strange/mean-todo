// set up 
var AuthorModel = require('../models/author');
var TodoModel = require('../models/todo');


// start author controller
var authorsController = {
  index: function(req, res){
    AuthorModel.find({}, function(err, docs){
      res.json(docs);
    });
  },
  new: function(req, res){
    var author = new AuthorModel({name: req.body.name});
    author.save(function(err){
      if(!err){
        console.log(err);
      }
    });
  },
  show: function(req, res){
    AuthorModel.findOne({_id: req.params.id}, function(err, docs){
      res.json(docs);
      console.log(docs);
    });
  }
}

module.exports = authorsController;
