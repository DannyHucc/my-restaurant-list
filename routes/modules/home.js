const express = require('express')
const Restaurants = require('models-file/restaurant')
const router = express.Router()

router.get('/', (req, res) => {
    const userId = req.user._id
    Restaurants.find({ userId })
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