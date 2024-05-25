'use strict';

module.exports = class {

  constructor(id = null, userId,name, room, ip) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.room = room;
    this.ip = ip;
  }

};