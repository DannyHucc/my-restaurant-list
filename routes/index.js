const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')
const users = require('./modules/users')
const auth = require('./modules/auth')
const { authenticator } = require('middleware-file/auth')

router.use('/auth', auth)
router.use('/users', users)
router.use('/restaurants', authenticator, restaurants)
router.use('/search', authenticator, search)
router.use('/', authenticator, home)

router.use((error, req, res, next) => {
    if (error.status === 404) {
        req.flash('warning_msg', 'The requested URL was not found on this server.')
        return res.status(404).render('error')
    }
    if (error.status === 500) {
        req.flash('warning_msg', 'Sorry! Server is broken. We will fix it soon.')
        return res.status(500).render('error')
    }
    next(error)
})

module.exports = router