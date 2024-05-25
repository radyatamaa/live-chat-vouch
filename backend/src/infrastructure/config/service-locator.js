'use strict';

const constants = require('./constants');
const environment = require('./environment');
const RoomRepositoryMongo = require('../repositories/RoomRepositoryMongo');
const UserRepositoryMongo = require('../repositories/UserRepositoryMongo');
const MessageRepositoryMongo = require('../repositories/MessageRepositoryMongo');
const RoomSerializer = require('../../interfaces/http/serializers/roomSerializer');

function buildBeans() {

  const beans = {
    roomSerializer: new RoomSerializer(),
    roomRepository: new RoomRepositoryMongo(),
    userRepositoryMongo: new UserRepositoryMongo(),
    messageRepositoryMongo: new MessageRepositoryMongo(),
  };

  return beans;
}

module.exports = buildBeans();