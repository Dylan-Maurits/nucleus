const functions = require('@google-cloud/functions-framework')
const { postShoppingList, addItem } = require("./api/ShoppingList/shoppingList.js")
const setupDatabase = require("./setup/shoppingList.js")
require('dotenv').config()

functions.http('httpEntry', async (req, res) => {
    switch (req.path) {
        case '/postShoppingList': await postShoppingList(req, res); break;
        case '/addItem': await addItem(req, res); break;
        case '/setupDatabase': await setupDatabase(req, res); break;
        default: res.send('404')
    }
})