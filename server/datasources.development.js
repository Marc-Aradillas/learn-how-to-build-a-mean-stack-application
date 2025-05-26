module.exports = {
  mongodb: {
    name: 'mongodb',
    connector: 'mongodb',
    hostname: process.env.DB_HOST || 'localhost',
    port: 27017,
    database: process.env.DB_NAME || 'lafs'
  }
};