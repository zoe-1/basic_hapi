// web-plugins/registry.js
// registry list of all plugins 

var Bcrypt = require('bcrypt');
var Basic = require('hapi-auth-basic');

var WPlugins = module.exports = {};

/*
 * Add your custom plugins to the registry.
 * Each module of the web application is stored here.
 */
WPlugins.registry = [
   /*
    * plugins-web/one
    */
   {
      0: {
         register: require('./one')
      },
      1: {
         select: ['web'],
      },
      2: function(err) {
         if (err) {
            console.log('web-plugins/one load error');
         }
      }
   },
   /*
    * plugins-web/two
    */
   {
      0: {
         register: require('./two')
      },
      1: {
         select: ['web'],
         routes: {
            vhost: "boom.localhost",
         }
      },
      2: function(err) {
         if (err) {
            console.log('web-plugins/two load error');
         }
      }
   }
];

/*
 *  WPlugins.register(server)
 *  @params server = Hapi server object.
 */
WPlugins.register = function(server) {
   /*
    * Register all plugins in module with hapi server.
    */
   for (i = 0; i < this.registry.length; i++) {
      server.register(this.registry[i][0], this.registry[i][1], this.registry[i][2]);
   }
};


