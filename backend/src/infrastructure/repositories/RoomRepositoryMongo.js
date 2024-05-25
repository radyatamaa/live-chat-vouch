'use strict';

const Room = require('../../domain/Room');
const MongooseRoom = require('../orm/mongose/schemas/Room');
const RoomRepository = require('../../domain/RoomRepository');

module.exports = class extends RoomRepository {

  constructor() {
    super();
  }

  async persist(roomEntity) {
    const { name } = roomEntity;
    const mongooseRoom = new MongooseRoom({ name });
    await mongooseRoom.save();
    return new Room(mongooseRoom.id, mongooseRoom.name);
  }

  async merge(roomEntity) {
    const { id, name } = roomEntity;
    const mongooseRoom = MongooseRoom.findByIdAndUpdate(id, { name });
    return new Room(mongooseRoom.id, mongooseRoom.name);
  }

  async remove(roomId) {
    return MongooseRoom.findOneAndDelete(roomId);
  }

  async get(roomId) {
    const mongooseRoom = await MongooseRoom.findById(roomId);
    if (!mongooseRoom) {
      return null;
    }
    return new Room(mongooseRoom.id, mongooseRoom.name);
  }

  async getByName(roomName) {
    const mongooseRoom = await MongooseRoom.findOne({ name: roomName });
    if (!mongooseRoom) {
        return null;
    }
    return new Room(mongooseRoom.id, mongooseRoom.name);
  }

  async find() {
    const mongooseRooms = await MongooseRoom.find();
    return mongooseRooms.map((mongooseRoom) => {
      return new Room(mongooseRoom.id, mongooseRoom.name);
    });
  }

};