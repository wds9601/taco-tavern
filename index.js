require('dotenv').config()
const express = require('express')
const layouts = require('express-ejs-layouts')

const app = express()

app.set('view engine','ejs')
app.use(layouts)

app.get('/', (req, res) => {
    res.send('STUB HOME PAGE ROUTE')
})


app.listen(process.env.PORT || 3000, () => {
    console.log('You are connected to 3000.....')
})