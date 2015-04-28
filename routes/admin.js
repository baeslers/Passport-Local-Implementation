var mongoose = require('mongoose');
var User = mongoose.model('User');
var express = require('express');
var _ = require('lodash');

module.exports = function(app, passport){
  var router = express.Router();
  router.use(function(req, res, next){
    if (!req.user || !_contains(req.user.roles, 'admin')){ res.status(400).redirect('/'); return; }
    next();
  });
  router.route('/')
    .get(function(req, res){
      res.sendFile('admin.html');
    });

  router.route('/users')
    .get(function(req, res){
      User.find({}, function(err, users){
        if (err){ res.status(400).send(err); return; }
        if (!users) { res.send('no users yet!'); return; }
        res.json(users);
      });
    })
    .post(function(req, res){
      var user = new User(req.body);
      User.findOne({username: user.username}, function(err, result){
        if (err) { res.status(400).send(err); return; }
        if (result) { res.status(400).send('error: user already exists'); return; }
        user.save(function(err, user){
          if (err){ res.status(400).send('error: couldn\'t save user!' ); return; }
          if (user){ res.json(user); return; }
        });
      });
    })

    .put(function(req, res){
      //update user
    });

  app.use('/admin', router);

};