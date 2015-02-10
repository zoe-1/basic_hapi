// ./web-plugins/one/one.js
// Example of modularizing webserver plugins.

var Bcrypt = require('bcrypt');
var Basic = require('hapi-auth-basic');

exports.register = function(server,options,next){

	server.route({
		method:'GET',
		path:'/',
		handler:function(request, reply){
			reply('One index passed.');
		}
	});

	next();

};

exports.register.attributes = {
	name:'one',
	version:'0.0.1',
	pkg:require('./package.json')
};

