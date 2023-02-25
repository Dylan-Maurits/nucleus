const db = require("../../app/db.js")

async function postShoppingList(req, res) {

    console.log(req.body.list.items)
    const pool = await db()
    let message = 'You posted a shopping list!'
    let status = 200
    const user = req.body.list.user
    const name = req.body.list.name

    try {
        await pool.query(`INSERT INTO shopping_list (user, name) VALUES (?, ?)`, [user, name])
    } catch (e) {
        message = e.message
    }

    res.status(status).send({message});
}

module.exports = postShoppingList