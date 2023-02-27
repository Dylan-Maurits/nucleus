const db = require("../../app/db.js")

async function postShoppingList(req, res) {
    const pool = await db()
    let message = 'You posted a shopping list!'
    let status = 200
    const user = req.body.user
    const name = req.body.name

    try {
        await pool.query(`INSERT INTO shopping_list (user, name)
                          VALUES (?, ?)`, [user, name])
    } catch (e) {
        message = e.message
    }

    res.status(status).send({message});
}

async function addItem(req, res) {
    const pool = await db()
    let message = 'Added items to shopping list'
    let status = 200
    const name = req.body.name
    const quantiy = req.body.quantity
    const unit = req.body.unit
    const listId = req.body.list_id

    try {
        await pool.query(`INSERT INTO list_items (name, quantity, unit, list_id) VALUES (?, ?, ?, ?)`, [name, quantiy, unit, listId])
    } catch (e) {
        message = e.message
        status = 500
    }
    res.status(status).send(message)
}

async function getList(req, res) {
    const pool = await db()
    let status = 200
    const listId = req.body.list_id

    try {
        const result = pool.query()
    } catch (e) {
        result = 'Failed to retrieve shopping list'
        status = 500
    }

    res.status(status).send(result)
}

module.exports = {postShoppingList, addItem, getList}