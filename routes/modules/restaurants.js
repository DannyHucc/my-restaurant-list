if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const router = express.Router()
const Restaurants = require('models-file/restaurant')

router.get('/new', (req, res) => {
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
    res.render('new', { javascript: ['new.js', 'autofill.js'], GOOGLE_API_KEY })
})

router.post('/', (req, res, next) => {
    const userId = req.user._id
    return Restaurants.create({ ...req.body, userId })
        .then(() => res.redirect('/'))
        .catch(error => next(error))
})

router.get('/:id/detail', (req, res, next) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurants.findById({ _id, userId })
        .lean()
        .then((restaurant) => res.render('detail',
            { restaurant }))
        .catch(error => next(error))
})

router.get('/:id/edit', (req, res, next) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurants.findOne({ _id, userId })
        .lean()
        .then((restaurant) => res.render('edit',
            { restaurant }))
        .catch(error => next(error))
})

router.put('/:id/edit', (req, res, next) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurants.findByIdAndUpdate({ _id, userId }, req.body)
        .then(() => res.redirect(`/restaurants/${_id}/detail`))
        .catch(error => next(error))
})

router.delete('/:id/delete', (req, res, next) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurants.findByIdAndDelete({ _id, userId })
        .then(() => res.redirect(`/`))
        .catch(error => next(error))
})

module.exports = router