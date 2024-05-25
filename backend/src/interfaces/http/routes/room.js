'use strict';

const RoomController = require('../controllers/RoomController');
const Joi = require('@hapi/joi');

module.exports = {
  name: 'room',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'POST',
        path: '/api/join',
        handler: RoomController.joinRoom,
        options: {
          description: 'Join a room',
          tags: ['api'],
          validate: {
            payload: Joi.object({
              room: Joi.string(),
              username: Joi.string()
            })
          }
        },
      },
      {
        method: 'POST',
        path: '/api/logout-room',
        handler: RoomController.logoutRoom,
        options: {
          description: 'logout a room',
          tags: ['api'],
          validate: {
            payload: Joi.object({
              room: Joi.string(),
              username: Joi.string()
            })
          }
        },
      },
    ]);
  }
};