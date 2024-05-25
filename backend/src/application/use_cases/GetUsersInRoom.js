// src/domain/use-cases/GetUsersInRoom.js
'use strict';

module.exports = async (room, { userRepositoryMongo }) => {
  const users = await userRepositoryMongo.find({room:room});
  return users;
};
