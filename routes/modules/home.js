const express = require('express')
const Restaurants = require('models-file/restaurant')
const router = express.Router()

router.get('/', (req, res) => {
    Restaurants.find()
        .lean()
        .then(restaurants => res.render('index', { restaurants }))
        .catch(error => console.error(error))
})

module.exports = router