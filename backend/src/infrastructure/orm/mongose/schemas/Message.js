const mongoose = require('../mongoose');

const messageSchema = new mongoose.Schema({
    room: String,
    message: String,
    time: {
      type: Date,
      default: Date.now
    },
    username: String,
});

module.exports = mongoose.model('Message', messageSchema);