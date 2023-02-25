const db = require("../app/db.js")

db.query(`CREATE TABLE IF NOT EXISTS shopping_list
                (
                    id     MEDIUMINT    NOT NULL AUTO_INCREMENT,
                    user MEDIUMINT,
                    name VARCHAR(255),
                    PRIMARY KEY (id)
                )`);
