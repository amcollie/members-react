require('dotenv').config()
const { Pool } = require('pg');

const SSL = process.env.NODE_ENV === 'production';

const devConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: SSL
};

const prodConfig = {
    connectionString: process.env.DATABASE_URL
};

module.exports = new Pool(
    process.env.NODE_ENV === "production" ? prodConfig : devConfig
);
