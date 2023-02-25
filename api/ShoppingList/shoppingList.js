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

async function addItems(req, res) {
    const pool = await db()
    let message = 'Added items to shopping list'
    let status = 200
    const items  = req.body.list.items
    for (let item in items) {
        console.log(item)
    }
    res.send('ok')

    // try {
    //     for (let item in items) {
    //         await pool.query(`INSERT INTO list_items` ())
    //     }
    // } catch (e) {
    //
    // }

}

module.exports = { postShoppingList, addItems }