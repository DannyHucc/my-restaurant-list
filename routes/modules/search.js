const express = require('express')
const router = express.Router()
const Restaurants = require('models-file/restaurant')

router.get('/', (req, res) => {
    const keywords = req.query.keywords.trim().toLowerCase()
    if (!keywords) { return res.render('error'), { keywords } }

    Restaurants.find({
        $or: [
            { name: { $regex: keywords } },
            { name_en: { $regex: keywords } },
            { category: { $regex: keywords } }
        ]
    })
        .lean()
        .then((filterRestaurants) => {
            if (filterRestaurants.length) {
                return res.render("index", { restaurants: filterRestaurants, keywords })
            } else {
                return res.render('error', { keywords })
            }
        })
        .catch(err => console.log(err))
})

module.exports = router