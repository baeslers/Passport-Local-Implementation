var mongoose = require('mongoose');
var User = mongoose.model('User');
var express = require('express');


module.exports = function(app, passport){
  var router = express.Router();
  router.use(function(req, res, next){
    console.log(req.session);
  });
  router.route('/')
    .get(function(req, res){
      res.sendFile('admin.html');
    });

  app.use('/admin', router);

};