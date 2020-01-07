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
    })  
})


module.exports = router