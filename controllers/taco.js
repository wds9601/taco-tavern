let axios = require('axios')
let express = require('express')
let router = require('express').Router()
let db = require('../models')

//POST /taco/addTaco - Create a new taco recipe and add to tacos db
router.post('/', (req, res) => {
    db.tacos.findOrCreate({
        where: { name: req.body.name },
        defaults: req.body
    })
    .then(([newTaco, wasCreated]) => {
        if(wasCreated) {
            console.log(`${newTaco} was created: ${wasCreated}`)
        } else {
            req.flash('error', 'Sorry! This taco name already exists.')
            console.log('ERROR', err)
        }
        res.redirect('/taco')
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })
})

//POST /taco/:id - add a favorite taco to the users_tacos
router.post('/:id', (req, res) => {
    db.users_tacos.findOrCreate({
        where: { tacoId: req.body.tacoId, userId: req.body.id}
    })
    .then(([newFav, wasCreated]) => {
        if(wasCreated) {
            console.log(`${newFav} was created: ${wasCreated}`)
        } else {
            req.flash('error', 'You have already added this taco to your favorites.')
        }
        res.redirect('../profile')
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })
})

// GET /addTaco - show form for adding a new taco recipe
router.get('/addTaco', (req, res) => {
    res.render('addTaco')
})

//GET /tacos to browse all taco recipes
router.get('/', (req, res) => {
    db.tacos.findAll()
    .then((taco) => {
        res.render('taco', {
            taco: taco
        })
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })  
})

//GET /:id - show one full taco layout with links to the recipes
router.get('/:id', (req, res) => {
    db.tacos.findOne({
        where: { id: req.params.id }
    })
    .then((taco) => {
        res.render('taco/show', {
            taco: taco
        })
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })  
})

module.exports = router