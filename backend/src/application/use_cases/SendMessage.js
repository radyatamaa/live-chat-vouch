'use strict';

const Message = require('../../domain/Message');
const User = require('../../domain/User');

module.exports = async (request, { userRepositoryMongo, messageRepositoryMongo }) => {
  const user = await userRepositoryMongo.getOne({userId:request.id});
  if (user) {
    const message = new Message(null,user.room,request.text,request.time,user.name);
    await messageRepositoryMongo.persist(message);
    return { room: message.room,userName: user.name, text: request.text, time: request.time };
  }

  return null;
};