'use strict';

const Hapi = require('@hapi/hapi');
const Good = require('@hapi/good');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Blipp = require('blipp');
const HapiSwagger = require('hapi-swagger');

const createServer = async () => {

  // Create a server with a host and port
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    "routes": {
      "cors": {
          "origin": ["*"],
          "headers": ["Accept", "Content-Type"],
          "additionalHeaders": ["X-Requested-With"]
      }
  }
  });

  // Register vendors plugins
  await server.register([
    Blipp,
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'Live Chat Vouch API Documentation',
          version: 'v1',
        },
      }
    },
    {
      plugin: Good,
      options: {
        ops: {
          interval: 1000 * 60
        },
        reporters: {
          myConsoleReporter: [
            {
              module: '@hapi/good-squeeze',
              name: 'Squeeze',
              args: [{ ops: '*', log: '*', error: '*', response: '*' }]
            },
            {
              module: '@hapi/good-console'
            },
            'stdout'
          ]
        }
      },
    },
  ]);

  // Register custom plugins
  await server.register([
    require('../../../interfaces/http/routes/room'),
  ]);

  server.app.serviceLocator = require('../../config/service-locator');

  return server;
};

module.exports = createServer;