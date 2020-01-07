let axios = require('axios')
let router = require('express').Router()
let isAdminLoggedIn = require('../middleware/isAdminLoggedIn')
let isLoggedIn = require('../middleware/isLoggedIn')

//GET /profile Non-Admin Profile
router.get('/', isLoggedIn, (req, res) => {
    res.render('profile/main')
})


//Get /profile/admin
router.get('/admin', isAdminLoggedIn, (req, res) => {
    res.render('profile/admin')
})

module.exports = router