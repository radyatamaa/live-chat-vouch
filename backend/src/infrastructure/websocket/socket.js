// src/infrastructure/websocket/socket.js
const setupWebSocket = require('../webserver/websocket/server');

module.exports = (server) => {
  setupWebSocket(server);
};
