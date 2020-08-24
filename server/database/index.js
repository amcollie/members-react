require('dotenv').config()
const { Pool } = require('pg');

const SSL = process.env.NODE_ENV === 'production';

module.exports = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: SSL
});
