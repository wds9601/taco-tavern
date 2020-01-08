let axios = require('axios')
let express = require('express')
let router = require('express').Router()
let db = require('../models')

//POST /beer/addBeer - Create a new beer and add to beer db
router.post('/', (req, res) => {
    // res.send('POST to beer')
    db.beers.findOrCreate({
        where: { name: req.body.name },
        defaults: req.body
    })
    .then(([newBeer, wasCreated]) => {
        if(wasCreated) {
            console.log(`${newBeer} was created: ${wasCreated}`)
        } else {
            req.flash('error', 'Sorry! This beer name already exists.')
            console.log('ERROR', err)
        }
        res.redirect('/beer')
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })
})

//GET /beers to browse all beer
router.get('/', (req, res) => {
    // //API URL to call
    // var beerUrl = 'https://api.punkapi.com/v2/beers'
    // //Use request to call API
    // axios.get(beerUrl)
    // .then((apiResponse) => {
    //     // console.log(apiResponse.data)
    //     var beer = apiResponse.data
    //     // console.log(beer[0].ingredients.hops[0].name)
    //     res.render('beer', {
    //         beer: beer,
    //     })
    // })
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
    // var beerUrl = 'https://api.punkapi.com/v2/beers/' + req.params.id
    // axios.get(beerUrl)
    // .then((apiResponse) => {
    //     var beer = apiResponse.data
    //     console.log(beer[0].name)
    //     res.render('beer/show', {
    //         beer: beer[0],
    //     })
    // })
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