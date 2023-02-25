const functions = require('@google-cloud/functions-framework')
const mysql = require('promise-mysql');
const postShoppingList = require("./models/ShoppingList/shoppingList.js")
require('dotenv').config()

functions.http('httpEntry', async (req, res) => {
    switch (req.url.split('/')[1]) {
        case 'postShoppingList': await postShoppingList(req, res); break;
        default: res.send('404')
    }
})