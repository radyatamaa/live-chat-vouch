'use strict';

const _serializeJoinRoom = (room) => {
  return {
    'room_id' : room.roomId,
    'username': room.username,
    'is_able_join': room.isAbleJoin
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeJoinRoom);
    }
    return _serializeJoinRoom(data);
  }

};