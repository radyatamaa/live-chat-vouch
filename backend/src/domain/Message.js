'use strict';

module.exports = class {

  constructor(id = null, room, message, time, username) {
    this.id = id;
    this.room = room;
    this.message = message;
    this.time = time;
    this.username = username;
  }

};