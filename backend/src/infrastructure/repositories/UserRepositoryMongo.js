'use strict';

const User = require('../../domain/User');
const MongooseUser = require('../orm/mongose/schemas/User');
const UserRepository = require('../../domain/UserRepository');

module.exports = class extends UserRepository {

  constructor() {
    super();
  }

  async persist(userEntity) {
    const mongooseUser = new MongooseUser(userEntity);
    await mongooseUser.save();
    return new User(mongooseUser.id,mongooseUser.userId, mongooseUser.name, mongooseUser.room, mongooseUser.ip);
  }

  async merge(userEntity) {
    const { id, name } = userEntity;
    const mongooseUser = MongooseUser.findByIdAndUpdate(id, { name });
    return new User(mongooseUser.id,mongooseUser.userId, mongooseUser.name, mongooseUser.room, mongooseUser.ip);
  }

  async remove(filter) {
    return MongooseUser.deleteMany(filter);
  }

  async getOne(filter) {
    const mongooseUser = await MongooseUser.findOne(filter);
    if (!mongooseUser) {
        return null;
    }
    return new User(mongooseUser.id,mongooseUser.userId, mongooseUser.name, mongooseUser.room, mongooseUser.ip);
  }

  async find(filter) {
    const mongooseUsers = await MongooseUser.find(filter);
    return mongooseUsers.map((mongooseUser) => {
      return new User(mongooseUser.id,mongooseUser.userId, mongooseUser.name, mongooseUser.room, mongooseUser.ip);
    });
  }

};