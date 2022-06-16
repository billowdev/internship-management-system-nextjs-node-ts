const dotenv = require("dotenv");
dotenv.config(); // this is important!

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dbDevelopment: process.env.DB_DATABASE_DEVELOPMENT,
  dbProduction: process.env.DB_DATABASE_PRODUCTION,
  dbTest: process.env.DB_DATABASE_TEST,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
};

module.exports = {
  development: {
    username: config.username,
    password: config.password,
    database: config.dbDevelopment,
    host: config.host,
    dialect: config.dialect,
  },
  test: {
    username: config.username,
    password: config.password,
    database: config.dbTest,
    host: config.host,
    dialect: config.dialect,
  },
  production: {
    username: config.username,
    password: config.password,
    database: config.dbProduction,
    host: config.host,
    dialect: config.dialect,
  },
};
