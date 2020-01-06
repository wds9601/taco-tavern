require('dotenv').config()
const axios = require('axios');
const express = require('express')
const layouts = require('express-ejs-layouts')

const app = express()

app.set('view engine','ejs')

app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(layouts)

//Get main index of site
app.get('/', (req, res) => {
    // //API URL to call
    // var beerUrl = 'https://api.punkapi.com/v2/beers'
    // //Use request to call API
    // axios.get(beerUrl)
    // .then((apiResponse) => {
    //     // console.log(apiResponse.data)
    //     var beer = apiResponse.data
    //     console.log(beer[0].ingredients.hops[0].name)
    // })
    var tacoUrl = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'
    axios.get(tacoUrl)
    .then((apiResponse) => {
        // console.log(apiResponse)
        var baseLayer = apiResponse.data.condiment.recipe
        console.log(baseLayer)
    })
    .catch(err => {
        console.log('ERROR', err)
    })
    return
})




app.listen(process.env.PORT || 3000, () => {
    console.log('You are connected to 3000.....')
})