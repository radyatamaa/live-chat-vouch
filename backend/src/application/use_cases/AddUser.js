'use strict';

const User = require('../../domain/User');

module.exports = async (userData, { userRepositoryMongo }) => {
  if (userData.name.length > 15) {
    return { error:'Username too long maximal length is 15', user: null };
  }

  if (userData.room.length > 5) {
    return { error:'Room too long maximal length is 5', user: null };
  }

  userData.name =  userData.name.trim().toLowerCase();
  userData.room =  userData.room.trim().toLowerCase();
  const existingUser = await userRepositoryMongo.getOne({name:userData.name});
  if (existingUser) {
    return { error:'Username is Taken', user: null };
  }
  const user = new User(null, userData.id,userData.name, userData.room, userData.ip);
  const savedUser = await userRepositoryMongo.persist(user);
  return { error:null, user: savedUser };
};
