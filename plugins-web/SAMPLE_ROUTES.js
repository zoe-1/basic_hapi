
// *****************************
//	   hapijs sample routes and authentication.	
// *****************************
/*
 * REGISTER plugins examples below
 */
/*server.register({
   register: require('./web-plugins/one')
}, {
   select: ['web']
}, function(err) {
   if (err) {
      console.log('web-plugins/one load error');
   }
});
*/

/*
 * Register plugin
 * prefix configuration.
 server.register({
   register: require('./web-plugins/two')
}, {
   select: ['web'],
   routes: {
      prefix: '/two'
   }
}, function(err) {
   if (err) {
      console.log('web-plugins/two load error');
   }
});*/


/*
 * Register plugin  
 * subdomain config 
	 server.register({
   register: require('./web-plugins/two')
}, {
   select: ['web'],
   routes: {
      vhost: "boom.localhost",
   }
}, function(err) {
   if (err) {
      console.log('web-plugins/one load error');
   }
});*/



WPlugins.register_authorization = function(server) {

	var users = {
		 john: {
				username: 'john',
				password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm', // 'secret'
				name: 'John Doe',
				id: '2133d32a'
		 }
	};

	var validate = function(username, password, callback) {
		 var user = users[username];
		 if (!user) {
				return callback(null, false);
		 }

		 Bcrypt.compare(password, user.password, function(err, isValid) {
				callback(err, isValid, {
					 id: user.id,
					 name: user.name,
					 username: user.username
				});
		 });
	};

	server.register(Basic, function(err) {
			server.auth.strategy('simple', 'basic', {
			validateFunc: validate
		});
		server.route({
			method: 'POST',
			path: '/test',
			config: {
				 auth: 'simple',
				 handler: function(request, reply) {
						reply('hello, ' + request.auth.credentials.name +'--'+request.auth.credentials.username);
				 }
			}
		});
	});

};

