/* jshint esnext:true */

var Hapi = require('hapi');
var Good = require('good');
var WPlugins = require('./plugins-web/registry.js');

var internals = {};
var server = new Hapi.Server();


/*
 * CONFIGURE servers and connections
 */
server.connection({
   labels: 'web',
   host: 'localhost',
   port: 8000
});
server.connection({
   labels: 'api',
   host: 'localhost',
   port: 8001
});


/*
 * LOAD web server PLUGINS
 */
WPlugins.register(server);


/*
 * LOAD console reporting
 */
server.register({
   register: Good,
   options: {
      reporters: [{
         reporter: require('good-console'),
         args: [{
            log: '*',
            response: '*'
         }]
      }]
   }
}, function(err) {
   if (err) {
      throw err; // failed to load good plugin	
   }
});


/*
 * START server
 */
server.start(function() {
   console.log('Server running at:', server.info.uri);
});
