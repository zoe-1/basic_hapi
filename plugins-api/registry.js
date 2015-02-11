// plugins-api/registry.js
// registry list of all api plugins 


var APlugins = module.exports = {};

/*
 * Add your custom plugins to the registry.
 * Each module of the web application is stored here.
 */
APlugins.registry = [
   /*
    * plugins-api/base
    */
   {
      0: {
         register: require('../plugins-api/base')
      },
      1: {
         select: ['api'],
      },
      2: function(err) {
         if (err) {
            console.log('plugins-api/base load error');
         }
      }
   }
];

/*
 *  APlugins.register(server)
 *  @params server = Hapi server object.
 */
APlugins.register = function(server) {
   /*
    * Register all plugins in module with hapi server.
    */
   for (i = 0; i < this.registry.length; i++) {
      server.register(this.registry[i][0], this.registry[i][1], this.registry[i][2]);
   }
};
