'use strict';

const bootstrap = require('./src/infrastructure/config/boostrap');
const createServer = require('./src/infrastructure/webserver/http/server');
const setupWebSocket = require('./src/infrastructure/websocket/socket');

// Start the server
const start = async () => {

  try {
    await bootstrap.init();

    const server = await createServer();
    setupWebSocket(server.listener);
    
    await server.start();

    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();