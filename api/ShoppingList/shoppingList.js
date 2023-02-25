const db = require("../../app/db.js")

async function postShoppingList(req, res) {

    console.log(req.body.list.items)
    const pool = await db()
    let message = 'You posted a shopping list!'
    let status = 200

    // try {
    //     await pool.query(`INSERT INTO shopping_list (string) VALUES (?)`, [string])
    // } catch (e) {
    //     message = e.message
    //     status = 500
    // }

    res.status(status).send({message});
}

module.exports = postShoppingList