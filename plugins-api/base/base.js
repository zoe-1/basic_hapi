// plugins-api/base/base.js

exports.register = function(server, options, next) {

   server.route({
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
         reply('plugins-api base/ entered.');
				 // reply.view('login');
      }
   });

};


exports.register.attributes = {
   name: 'base',
   version: '0.0.1',
   pkg: require('./package.json')
};
