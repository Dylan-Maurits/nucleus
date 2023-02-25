const db = require("../app/db.js")

async function setupDatabase(req, res) {
    const pool = await db()
    let message = 'Database setup completed'
    let status = 200

    try {
        await pool.query(`CREATE TABLE IF NOT EXISTS shopping_list
                          (
                              id     MEDIUMINT    NOT NULL AUTO_INCREMENT,
                              user MEDIUMINT NOT NULL,
                              name VARCHAR(255) NOT NULL,
                              PRIMARY KEY (id)
                          )`)
        await pool.query(`CREATE TABLE IF NOT EXISTS shopping_items
                          (
                              id     MEDIUMINT    NOT NULL AUTO_INCREMENT,
                              name MEDIUMINT,
                              quantity VARCHAR(255),
                              unit INT,
                              PRIMARY KEY (id),
                              FOREIGN KEY (id) REFERENCES shopping_list(id)
                          )`)
    } catch (e) {
        message = e.message
        status = 500
    }

    res.status(status).send({ message });
}

module.exports = setupDatabase
