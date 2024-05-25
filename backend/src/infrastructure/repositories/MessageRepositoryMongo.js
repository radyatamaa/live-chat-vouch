'use strict';

const Message = require('../../domain/Message');
const MongooseMessage = require('../orm/mongose/schemas/Message');
const MessageRepository = require('../../domain/MessageRepository');

module.exports = class extends MessageRepository {

  constructor() {
    super();
  }

  async persist(messageEntity) {
    const mongooseMessage = new MongooseMessage(messageEntity);
    await mongooseMessage.save();
    return new Message(mongooseMessage.id, mongooseMessage.room, mongooseMessage.message, mongooseMessage.time, mongooseMessage.username);
  }

  async merge(messageEntity) {
    const { id, name } = messageEntity;
    const mongooseMessage = MongooseMessage.findByIdAndUpdate(id, { name });
    return new Message(mongooseMessage.id, mongooseMessage.room, mongooseMessage.message, mongooseMessage.time, mongooseMessage.username);
  }

  async remove(messageId) {
    return MongooseMessage.findOneAndDelete(messageId);
  }

  async getOne(filter) {
    const mongooseMessage = await MongooseMessage.findOne(filter);
    if (!mongooseMessage) {
        return null;
    }
    return new Message(mongooseMessage.id, mongooseMessage.room, mongooseMessage.message, mongooseMessage.time, mongooseMessage.username);
  }

  async find(filter) {
    const mongooseMessages = await MongooseMessage.find(filter);
    return mongooseMessages.map((mongooseMessage) => {
      return new Message(mongooseMessage.id, mongooseMessage.room, mongooseMessage.message, mongooseMessage.time, mongooseMessage.username);
    });
  }

};