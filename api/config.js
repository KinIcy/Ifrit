/**
 * @fileOverview Contains the setup for all servers.
 * @author Daniel Hernandez Cuero
 */
module.exports = {
  port: process.env.PORT || 8080,
  // db: process.env.MONGODB || 'mongodb://db:27017/Irim',
  db: process.env.MONGODB || 'mongodb://localhost:27017/Irim',
  SECRET_TOKEN: 'miclavedetokens',
};
