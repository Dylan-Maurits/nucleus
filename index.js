const functions = require('@google-cloud/functions-framework')
const mysql = require('promise-mysql');
const postRecipe = require("./models/recipes/recipe.js")
require('dotenv').config()

functions.http('httpEntry', async (req, res) => {
    switch (req.url.split('/')[1]) {
        case 'postRecipe': await postRecipe(req, res); break;
        default: res.send('404')
    }
})