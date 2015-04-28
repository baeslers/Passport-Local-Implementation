var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = function(app, passport){
	app.get('/', function(req, res){
      res.sendFile('index.html');
	});
    app.post('/register', function(req, res){
      var user = new User(req.body);
      if (req.body.password.length <= 5){ res.status(400).send('error: password must be longer'); return; }
      if (req.body.username.length <= 3){ res.status(400).send('error: username must be longer'); return; }
      User.findOne({
      	username: req.body.username
      }, function(err, userr){
      	   if(err) {res.status(400).send(err); }
      	   if (userr){res.status(400).send('error: user already exists'); return; }
      	   console.log(user);
           user.save(function(err, user){
             if (err){ res.status(400).send('couldn\tt save fo sum rezon'); return; }
      	     if(user) {res.send(user)};
           });
        });
    });
    app.post('/signin', passport.authenticate('local-signin', {
    	successRedirect: '/',
    	failureRedirect: '/nowhere'
    }));

};