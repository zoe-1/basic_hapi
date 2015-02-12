exports.register = function(server, options, next) {


   server.views({
      engines: {
         html: require('handlebars')
      },
      relativeTo: __dirname,
      path: './views',
      helpersPath: './views/helpers'
   });


	 /*
		* CONFIG STATIC FILES INCLUDE 
		*/
   server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
         directory: {
            path: 'public',
            // listing: true d/n show diretory tree. 
         }
      }
   });



   server.route({
      method: 'GET',
      path: '/',
      handler: function(request, reply) {
         // html view 
         reply.view('index');
      }
   });


   server.route({
      method: 'GET',
      path: '/hapi',
      handler: function(request, reply) {
         // html view 
         reply.view('hapi');
      }
   });


   server.route({
      method: 'GET',
      path: '/html5',
      handler: function(request, reply) {
         // html view 
         reply.view('html5');
      }
   });

   next();

};

exports.register.attributes = {
   name: 'three',
   version: '0.0.1',
   pkg: require('./package.json')
};
