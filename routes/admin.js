var mongoose = require('mongoose');
var User = mongoose.model('User');
var express = require('express');


module.exports = function(app, passport){
  var router = express.Router();
  router.use(function(req, res, next){
    console.log(req.session);
    next();
  });
  router.route('/')
    .get(function(req, res){
      res.sendFile('admin.html');
    });

  router.route('/users')
    .get(function(req, res){
      User.find({}, '', function(users){
        console.log(users);
      });
    })
    .post(function(req, res){
      //create user
    });

  app.use('/admin', router);

};