// src/interface/websocket/routes/userRoutes.js
const AddUser = require('../../../application/use_cases/AddUser');
const RemoveUser = require('../../../application/use_cases/RemoveUser');
const GetUser = require('../../../application/use_cases/GetUser');
const GetUsersInRoom = require('../../../application/use_cases/GetUsersInRoom');
const SendMessage = require('../../../application/use_cases/SendMessage');
const RoomController = require('../controllers/RoomController');
const serviceLocator = require('../../../infrastructure/config/service-locator');

const roomController = new RoomController({
  addUser: AddUser,
  removeUser: RemoveUser,
  getUser: GetUser,
  getUsersInRoom: GetUsersInRoom,
  sendMessage:SendMessage,
  serviceLocator
});

module.exports = (io, socket) => {
  socket.on('join', (data, callback) => roomController.handleJoin(io, socket, data, callback));
  socket.on('sendMessage', (message, callback) => roomController.handleSendMessage(io, socket, message, callback));
  socket.on('disconnect', () => roomController.handleDisconnect(io, socket));
};