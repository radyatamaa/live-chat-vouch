const socketio = require('socket.io');
const roomRoutes = require('../../../interfaces/websocket/routes/roomRoutes');

const setupWebSocket = (server) => {
  const io = socketio(server);
  io.set('origins', '*:*');
  io.on('connect', (socket) => {
    roomRoutes(io, socket);
  });
};

module.exports = setupWebSocket;
