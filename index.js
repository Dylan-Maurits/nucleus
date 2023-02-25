const functions = require('@google-cloud/functions-framework')
const postShoppingList = require("./api/ShoppingList/shoppingList.js")
require('dotenv').config()

functions.http('httpEntry', async (req, res) => {
    switch (req.path) {
        case '/postShoppingList': await postShoppingList(req, res); break;
        default: res.send('404')
    }
})