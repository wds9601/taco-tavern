let axios = require('axios')
let db = require('../models')
let router = require('express').Router()
let isLoggedIn = require('../middleware/isLoggedIn')

//GET /profile - View user profile page
router.get('/', isLoggedIn, (req, res) => {
    db.user.findOne({
        where: { id: req.user.id }
    })
    .then(user => {
        user.getBeers()
        .then( (brews) => {
            user.getTacos()
            .then((tacos) => {
                res.render('profile/main', { brews, tacos })
            })
            .catch(err => {
                console.log('ERROR', err)
                res.render('error')
            })
        })
        .catch(err => {
            console.log('ERROR', err)
            res.render('error')
        })
    })

})

//GET /edit - get edit page for user bio
router.get('/edit', isLoggedIn, (req, res) => {
    res.render('profile/edit')
})

//PUT /profile - edit user bio
router.put('/', (req, res) => {
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