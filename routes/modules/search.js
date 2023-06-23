const express = require('express')
const router = express.Router()
const Restaurants = require('models-file/restaurant')

router.get('/', (req, res, next) => {
    const keywords = req.query.keywords
    const userId = req.user._id
    const sort = req.query.sort

    Restaurants.find({
        $and: [
            { userId },
            {
                $or: [
                    { name: { $regex: keywords, $options: 'xi' } },
                    { name_en: { $regex: keywords, $options: 'xi' } },
                    { category: { $regex: keywords, $options: 'xi' } }
                ]
            }
        ]
    })
        .lean()
        .sort(sort)
        .then((filterRestaurants) => {
            if (filterRestaurants.length) {
                return res.render("index",
                    {
                        sort,
                        keywords,
                        search: 'search',
                        javascript: 'index.js',
                        restaurants: filterRestaurants
                    })
            }
            return res.render('index', { keywords, searchNotFound: 'searchNotFound' })
        })
        .catch(error => next(error))
})

module.exports = router