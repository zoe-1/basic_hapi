// ./web-plugins/two/two.js
// Example of modularizing webserver plugins.

exports.register = function(server,options,next){

	server.route({
		method:'GET',
		path:'/',
		handler:function(request, reply){
			reply('Two index passed.');
		}
	});

	next();

};

exports.register.attributes = {
	name:'two',
	version:'0.0.1',
	pkg:require('./package.json')
};
