'use strict';

const Room = require('../../domain/Room');
const User = require('../../domain/User');

module.exports = async (roomName,username, { userRepositoryMongo }) => {
  await userRepositoryMongo.remove({room:roomName,name:username});
  return {
    roomId : roomName,
    username: username
  };
};
