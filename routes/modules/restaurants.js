const express = require('express')
const router = express.Router()
const Restaurants = require('models-file/restaurant')

router.get('/new', (req, res) => {
    res.render('new')
})

router.post('/', (req, res) => {
    return Restaurants.create(req.body)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

module.exports = router