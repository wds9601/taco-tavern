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

//DELETE TACO /profile - delete a favorite taco from user's list
router.delete('/', (req , res) => {
    if(req.body.tacoId) {
        db.users_tacos.destroy({
            where: { tacoId: req.body.tacoId }
        })
        .then(destroyedTaco => {
            res.redirect('/profile')
        })
        .catch(err => {
            console.log('ERROR', err)
            res.render('error')
        })
    } else {
        db.users_beers.destroy({
            where: { beerId: req.body.beerId }
        })
        .then(destroyedBeer => {
            res.redirect('/profile')
        })
        .catch(err => {
            console.log('ERROR', err)
            res.render('error')
        })
    }
})

// //DELETE BEER /profile - delete a favorited beer from user's list
// router.delete('/', (req, res) => {
//     db.users_beers.destroy({
//         where: { beerId: req.body.beerId }
//     })
//     .then(destroyedBeer => {
//         res.redirect('/profile')
//     })
//     .catch(err => {
//         console.log('ERROR', err)
//         res.render('error')
//     })
// })



module.exports = router