let axios = require('axios')
let express = require('express')
let router = require('express').Router()


//GET /tacos to browse all tacos
router.get('/', (req, res) => {
    res.render('taco')
})


module.exports = router