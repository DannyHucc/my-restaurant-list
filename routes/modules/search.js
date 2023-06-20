const express = require('express')
const router = express.Router()
const Restaurants = require('models-file/restaurant')

router.get('/', (req, res) => {
    const keywords = req.query.keywords.trim().toLowerCase()
    if (!keywords) { return res.render('error'), { keywords } }

    Restaurants.find({
        $or: [
            { name: { $regex: keywords, $options: 'xi' } },
            { name_en: { $regex: keywords, $options: 'xi' } },
            { category: { $regex: keywords, $options: 'xi' } }
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