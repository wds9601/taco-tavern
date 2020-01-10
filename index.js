//Required node modules
require('dotenv').config()
let axios = require('axios')
let db = require('./models')
let flash = require('connect-flash')
let express = require('express')
let layouts = require('express-ejs-layouts')
let methodOverride = require('method-override')
let session = require('express-session')

//Declare express app variable
const app = express()

//Include passport configuration
let passport = require('./config/passportConfig')

//Set up middleware
app.set('view engine','ejs')
app.use(layouts)
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(flash())  //Depends on session; must come after it.  ORDER MATTERS!
app.use(passport.initialize()) //depends on session being declared above!!
app.use(passport.session())  //depends on session being declared above!!

//Custom middleware: add variables to locals for each page
app.use((req, res, next) => {
    res.locals.alerts = req.flash()
    res.locals.user = req.user
    next()
})

//Add any controllers
app.use('/auth', require('./controllers/auth'))
app.use('/profile', require('./controllers/profile'))
app.use('/beer', require('./controllers/beer'))
app.use('/taco', require('./controllers/taco'))

//Home route and catch-all route
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error')
})


//Look for port in .env, if none, listen on 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('You are connected to 3000.....')
})

//taco image 1 url
// https://thenypost.files.wordpress.com/2019/10/national-taco-day-2019-free-freebies-deals-specials.jpg?quality=80&strip=all

//taco image 2 url
// https://www.instagram.com/p/BlL_Q7pFxOc/media?size=l

//beer image 1 url
//https://sophosnews.files.wordpress.com/2016/08/free-beer.jpg?w=780&h=408&crop=1

//taco and beer image 1 url
// https://i.pinimg.com/originals/c2/ec/e1/c2ece1d91f5a89bd29967798b90636d8.jpg

//taco and beer image 2 url 
// http://thebeeroness.com/wp-content/uploads/2012/09/Beer-Chicken-Tacos-Beer-Corn-Tortillas.jpg

//taco and beer cartoon image - for error page
//https://previews.123rf.com/images/larryrains/larryrains1606/larryrains160601371/57935336-taco-with-beer.jpg