
exports.register = function(server,options,next){

	server.views({
		engines:{
			html:require('handlebars')				
		},	
		relativeTo: __dirname,
		path: './views',
		helpersPath:'./views/helpers'
	});

	server.route({
		method:'GET',
		path:'/',
		handler:function(request, reply){
			// html view 
			reply.view('index');
		}
	});

	server.route({
		method:'GET',
		path:'/hapi',
		handler:function(request, reply){
			// html view 
			reply.view('hapi');
		}
	});


	next();

};

exports.register.attributes = {
	name:'three',
	version:'0.0.1',
	pkg:require('./package.json')
};
