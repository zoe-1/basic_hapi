
var fs = require('fs');
var config = module.exports = {};


/*
 * tsl Trasport Layer Security (tls)
 */
config.tls = {
   key: fs.readFileSync('./lib/certs/key.pem'),
   cert: fs.readFileSync('./lib/certs/server.crt'),

   // This is necessary only if using the client certificate authentication.
   requestCert: true,

   // This is necessary only if the client uses the self-signed certificate.
   ca: [fs.readFileSync('./lib/certs/server.crt')]
};
