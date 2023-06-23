const express = require('express')
const Restaurants = require('models-file/restaurant')
const router = express.Router()

router.get('/', (req, res, next) => {
    const userId = req.user._id
    Restaurants.find({ userId })
        .lean()
        .sort({ _id: 'asc' })
        .then(restaurants => res.render('index',
            {
                restaurants,
                search: 'search',
                javascript: ['index.js']
            }))
        .catch(error => next(error))
})

module.exports = router