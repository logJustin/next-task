const Pool = require('pg').Pool
require('dotenv').config()
// require('dotenv')

const pool = new Pool({
    user: process.env.USER_NAME,
    // user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: process.env.DATABASE
})


module.exports = pool