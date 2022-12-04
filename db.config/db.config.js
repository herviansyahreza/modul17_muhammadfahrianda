const { Client } = require('pg');
require("dotenv").config()

// const db = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'mfahrianda_modul17',
//     password: '09april2002',
//     port: '5432',
// });

const db = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: '5432',
});

module.exports = db;