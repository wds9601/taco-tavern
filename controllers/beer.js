let axios = require('axios')
let express = require('express')
let router = require('express').Router()
let db = require('../models')


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

//GET /show/:id  - Show a single beer
router.get('show/:id', (req, res) => {
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

//GET /beer/addBeer - Show form for adding a new beer to db
router.get('/addBeer', (req, res) => {
    res.render('beer/addBeer')
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })
})


//POST /beer/addBeer - Create a new beer and add to beer db


module.exports = router