const express = require('express')
const Restaurants = require('models-file/restaurant')
const router = express.Router()

router.get('/', (req, res) => {
    Restaurants.find()
        .lean()
        .sort({ _id: 'asc' })
        .then(restaurants => res.render('index',
            {
                restaurants,
                javascript: 'index.js'
            }))
        .catch(error => console.error(error))
})

module.exports = router