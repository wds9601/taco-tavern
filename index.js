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
    
    // var tacoUrl = 'http://taco-randomizer.herokuapp.com/random/?full-taco=true'
    // axios.get(tacoUrl)
    // .then((apiResponse) => {
    //     // console.log(apiResponse)
    //     var baseLayer = apiResponse.data.condiment.recipe
    //     console.log(baseLayer)
    // })
    res.render('home')
    // .catch(err => {
    //     console.log('ERROR', err)
    // })
    // return
})


app.use('/beer', require('./controllers/beer'))
app.use('/taco', require('./controllers/taco'))

app.listen(process.env.PORT || 3000, () => {
    console.log('You are connected to 3000.....')
})