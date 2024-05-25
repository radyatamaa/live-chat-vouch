'use strict';

module.exports = async (id, { userRepositoryMongo }) => {
  const user = await userRepositoryMongo.getOne({userId:id});
  return user;
};
