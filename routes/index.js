//index contains all the routes that are used when we don't actually have a resource or a model in our URL
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')}) //    / = root of our app

module.exports = router