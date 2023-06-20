const express = require('express')
const router = express.Router()
const Restaurants = require('models-file/restaurant')

router.get('/', (req, res) => {
    const keywords = req.query.keywords
    const sort = req.query.sort

    Restaurants.find({
        $or: [
            { name: { $regex: keywords, $options: 'xi' } },
            { name_en: { $regex: keywords, $options: 'xi' } },
            { category: { $regex: keywords, $options: 'xi' } }
        ]
    })
        .lean()
        .sort(sort)
        .then((filterRestaurants) => {
            if (filterRestaurants.length) {
                return res.render("index",
                    {
                        restaurants: filterRestaurants,
                        keywords,
                        sort,
                        javascript: 'index.js'
                    })
            } else {
                return res.render('error', { keywords })
            }
        })
        .catch(err => console.log(err))
})

module.exports = router