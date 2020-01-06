let axios = require('axios')
let express = require('express')
let router = require('express').Router()


//GET /beers to browse all beer
router.get('/', (req, res) => {
    //API URL to call
    var beerUrl = 'https://api.punkapi.com/v2/beers'
    //Use request to call API
    axios.get(beerUrl)
    .then((apiResponse) => {
        // console.log(apiResponse.data)
        var beer = apiResponse.data
        // console.log(beer[0].ingredients.hops[0].name)
        res.render('beer', {
            beer: beer,
        })
    })
    
})


module.exports = router