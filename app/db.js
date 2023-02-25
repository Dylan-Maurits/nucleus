const mysql = require("promise-mysql")

const connection = async () => {
    return mysql.createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
    });
};

module.exports = connection