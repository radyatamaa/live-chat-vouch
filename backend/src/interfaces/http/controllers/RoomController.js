'use strict';

const JoinRoom = require('../../../application/use_cases/JoinRoom');
const LogoutRoom = require('../../../application/use_cases/LogoutRoom');

module.exports = {

  async joinRoom(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { room, username } = request.payload;

    // Treatment
    const joinRoom = await JoinRoom(room,username, serviceLocator);

    // Output
    return serviceLocator.roomSerializer.serialize(joinRoom);
  },

  async logoutRoom(request) {

    // Context
    const serviceLocator = request.server.app.serviceLocator;

    // Input
    const { room, username } = request.payload;

    // Treatment
    const joinRoom = await LogoutRoom(room,username, serviceLocator);

    // Output
    return serviceLocator.roomSerializer.serialize(joinRoom);
  },
};
