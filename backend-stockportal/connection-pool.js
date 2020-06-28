
const Pool = require('pg').Pool
const dbConfig = require("./app/config/db.config");
const { response } = require('express');

var pool = new Pool({
  host: dbConfig.HOST,
  user: dbConfig.USER, 
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT,
});

module.exports = pool;