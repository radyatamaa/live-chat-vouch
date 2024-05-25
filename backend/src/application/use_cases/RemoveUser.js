'use strict';

const Message = require('../../domain/Message');
const User = require('../../domain/User');

module.exports = async (id, { userRepositoryMongo, messageRepositoryMongo }) => {
  const user = await userRepositoryMongo.getOne({userId:id});
  await userRepositoryMongo.remove({userId:id});
  return user;
};