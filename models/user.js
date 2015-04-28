var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: String,
	password: String,
    roles: [{type: String, enum: ['user', 'admin'], required: true, default: 'user'}]
});


UserSchema.methods.authenticate = function(password){
	return (this.password === password);
};

module.exports = mongoose.model('User', UserSchema);