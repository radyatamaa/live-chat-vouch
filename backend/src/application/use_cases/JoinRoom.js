'use strict';

const Room = require('../../domain/Room');
const User = require('../../domain/User');

module.exports = async (roomName,username, { roomRepository, userRepositoryMongo }) => {
  roomName =  roomName.trim().toLowerCase();
  username =  username.trim().toLowerCase();
  const checkRoom = await roomRepository.getByName(roomName);
  if (!checkRoom) {
    const room = new Room(null, roomName);
    const createRoom = await roomRepository.persist(room);

    let user = await userRepositoryMongo.getOne({name:username});
    if (user) {
      return {
        roomId : createRoom.name,
        username: username,
        isAbleJoin: false
      };
    }

    return {
      roomId : createRoom.name,
      username: username,
      isAbleJoin: true
    };
  }

  let user = await userRepositoryMongo.getOne({name:username});
  if (user) {
    return {
      roomId : checkRoom.name,
      username: username,
      isAbleJoin: false
    };
  }

  return {
    roomId : checkRoom.name,
    username: username,
    isAbleJoin: true
  };
};
