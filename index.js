/* jshint esnext:true */

var Hapi = require('hapi');
var Good = require('good');
var WPlugins = require('./plugins-web/registry.js');
var APlugins = require('./plugins-api/registry.js');

var fs = require('fs');

var internals = {};
var server = new Hapi.Server();

/*
 * CONFIGURE tsl certs 
 * tsl Transport Security Layer (ssl3.1)
 */

var options = {
   key: fs.readFileSync('./lib/certs/key.pem'),
   cert: fs.readFileSync('./lib/certs/server.crt'),

   // This is necessary only if using the client certificate authentication.
   requestCert: true,

   // This is necessary only if the client uses the self-signed certificate.
   ca: [fs.readFileSync('./lib/certs/server.crt')]
};

/*
 * CONFIGURE servers and connections
 */
server.connection({
   labels: 'web',
   host: 'localhost',
   port: 8000
});
server.connection({
   labels: 'web-ssl',
   host: 'localhost',
   port: 8001,
   tls: options  // tls options loaded here.
});
server.connection({
   labels: 'api',
   host: 'localhost',
   port: 8002,
   tls: options
});


/*
 * LOAD web server PLUGINS
 */
WPlugins.register(server);
APlugins.register(server);


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
