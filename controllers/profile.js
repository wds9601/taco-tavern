let axios = require('axios')
let db = require('../models')
let router = require('express').Router()
let isLoggedIn = require('../middleware/isLoggedIn')

//GET /profile Non-Admin Profile
router.get('/', isLoggedIn, (req, res) => {
    res.render('profile/main')
})

//GET /edit - get edit page for user bio
router.get('/edit', isLoggedIn, (req, res) => {
    res.render('profile/edit')
})

//PUT /profile - edit user bio
router.put('/', (req, res) => {
    console.log('GETTING THIS ID', req.body.id)
    db.user.findOne({
        where: { id: req.body.id }
    })
    .then(user => {
        console.log(user.id)
        user.update({
            bio : req.body.bio
        })
        res.redirect('/profile')
    })
    .catch(err => {
        console.log('ERROR', err)
        res.render('error')
    })
})

//DELETE /profile - delete a favorited item from the list of favorites

module.exports = router