let axios = require('axios')
let express = require('express')
let router = require('express').Router()


//GET /tacos to get one random full taco recipe
router.get('/', (req, res) => {
    var tacoUrl = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'
    axios.get(tacoUrl)
    .then((apiResponse) => {
        var taco = apiResponse.data
        console.log(taco)
        res.render('taco', {
            taco: taco
        })
    })
    .catch((err) => {
        console.log('ERROR', err)
        res.render('error')
    })  
})

// GET /addTaco - show form for adding a new taco recipe
router.get('/addTaco', (req, res) => {
    res.send('GET route addTaco')
    // res.render('addTaco')
    // .catch((err) => {
    //     console.log('ERROR', err)
    //     res.render('error')
    // })
})


module.exports = router