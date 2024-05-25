class RoomController {
    constructor({addUser,removeUser,getUser,getUsersInRoom,sendMessage, serviceLocator }) {
      this.addUser = addUser;
      this.removeUser = removeUser;
      this.getUser = getUser;
      this.getUsersInRoom = getUsersInRoom;
      this.sendMessage = sendMessage;
      this.serviceLocator = serviceLocator;
    }
  
    handleJoin(io, socket, { name, room }, callback) {
      this.addUser({ id: socket.id, name, room, ip: socket.request.connection.remoteAddress }, this.serviceLocator)
        .then(({ error, user }) => {
          if (error) return callback(error);
          socket.join(user.room);
          socket.emit('message', { user: 'admin', text: `Hi ${user.name}, welcome to ${user.room} chat room` });
          this.serviceLocator.messageRepositoryMongo.find({room: user.room}).then(messages => {
            messages.forEach(message => {
              socket.emit('message', { user: message.username, text: message.message, time: message.time, old: true });
            });
          });
          socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined` });
          this.getUsersInRoom(user.room, this.serviceLocator).then(users => {
            io.to(user.room).emit('roomData', { room: user.room, users:  users});
          });
          callback();
        });
    }
  
    handleSendMessage(io, socket, message, callback) {
      const request = message
      request.id = socket.id
      this.sendMessage(request,this.serviceLocator).then(user => {
        if (user) {
          io.to(user.room).emit('message', { user: user.userName, text: user.text, time: user.time });
        }
        callback();
      });;
    }
  
    handleDisconnect(io, socket) {
      this.removeUser(socket.id, this.serviceLocator)
        .then(user => {
          if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: this.getUsersInRoom(user.room, this.serviceLocator) });
          }
        });
    }
  }
  
  module.exports = RoomController;
  