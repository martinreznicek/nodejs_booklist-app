const mysql = require('mysql2');
const config = require('../config/config.json')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_books_app',
    password: config.sql_pwd
});

module.exports = pool.promise();