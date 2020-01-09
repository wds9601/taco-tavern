let axios = require('axios')
let express = require('express')
let router = require('express').Router()
let db = require('../models')

//POST /beer/addBeer - Create a new beer and add to beer db
router.post('/', (req, res) => {
    db.beers.findOrCreate({
        where: { name: req.body.name },
        defaults: req.body
    })
    .then(([newBeer, wasCreated]) => {
        if(wasCreated) {
            console.log(`${newBeer} was created: ${wasCreated}`)
        } else {
            req.flash('error', 'Sorry! This beer name already exists.')
        }
        res.redirect('/beer')
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })
})

//POST /beer/:id - add a favorite beer to the users_beers
router.post('/:id', (req, res) => {
    db.users_beers.findOrCreate({
        where: { beerId: req.body.beerId, userId: req.body.id}
    })
    .then(([newFav, wasCreated]) => {
        if(wasCreated) {
            console.log(`${newFav} was created: ${wasCreated}`)
        } else {
            req.flash('error', 'You have already added this beer to your favorites.')
        }
        res.redirect('../profile')
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })
})

//GET /beers to browse all beer
router.get('/', (req, res) => {
    db.beers.findAll()
    .then((beer) => {
        res.render('beer', {
            beer: beer
        })
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })  
})

//GET /addBeer - Show form for adding a new beer to db
router.get('/addBeer', (req, res) => {
    res.render('beer/addBeer')
})

//GET /:id  - Show a single beer
router.get('/:id', (req, res) => {
    db.beers.findOne({
        where: { id: req.params.id }
    })
    .then((beer) => {
        res.render('beer/show', {
            beer: beer
        })
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })  
})


module.exports = router