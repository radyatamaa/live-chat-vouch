'use strict';

const mongoose = require('mongoose');
const environment = require('../../config/environment');

mongoose.connect(environment.database.url, { useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB database!')
});

const collection = db.collection('users');
// Clear the collection
collection.deleteMany({})
.then(result => {
  console.log(`Cleared ${result.deletedCount} documents from the collection.`);
})
.catch(err => {
  console.error('Error clearing collection:', err);
});

module.exports = mongoose;