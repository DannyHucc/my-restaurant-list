// env
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// packages and variables
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const usePassport = require('config-file/passport')
const routes = require('./routes')
require('./config/mongoose')
const app = express()
const PORT = process.env.PORT || 3000

// template engine: express-handlebars
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))
app.set('view engine', 'hbs')

// middleware: static files, body-parser, method-override
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// middleware: session
app.use(session({
    secret: 'ThisIsMySecret',
    resave: false,
    saveUninitialized: true
}))

// middleware: passport initialize
usePassport(app)

// middleware: authenticate
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated()
    res.locals.user = req.user
    next()
})

// middleware: routes
app.use(routes)

// start the server 
app.listen(PORT, () => {
    console.log(`Express is listening on localhost:${PORT}`)
})