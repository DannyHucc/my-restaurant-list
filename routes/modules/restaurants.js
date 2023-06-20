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

router.get('/:id/detail', (req, res) => {
    const id = req.params.id
    return Restaurants.findById(id)
        .lean()
        .then((restaurant) => res.render('detail',
            { restaurant }))
        .catch((error) => console.log(error))
})

module.exports = router