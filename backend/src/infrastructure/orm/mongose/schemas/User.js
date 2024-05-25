const mongoose = require('../mongoose');

const messageSchema = new mongoose.Schema({
    userId: String,
    room: String,
    name: String,
    ip: String,
});

module.exports = mongoose.model('User', messageSchema);