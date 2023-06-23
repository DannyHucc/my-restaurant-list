const express = require('express')
const router = express.Router()
const Restaurants = require('models-file/restaurant')

router.get('/new', (req, res) => {
    res.render('new',
        { javascript: ['new.js'] })
})

router.post('/', (req, res) => {
    const userId = req.user._id
    return Restaurants.create({ ...req.body, userId })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})

router.get('/:id/detail', (req, res) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurants.findById({ _id, userId })
        .lean()
        .then((restaurant) => res.render('detail',
            { restaurant }))
        .catch((error) => console.log(error))
})

router.get('/:id/edit', (req, res) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurants.findOne({ _id, userId })
        .lean()
        .then((restaurant) => res.render('edit',
            { restaurant }))
        .catch((error) => console.log(error))
})

router.put('/:id/edit', (req, res) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurants.findByIdAndUpdate({ _id, userId }, req.body)
        .then(() => res.redirect(`/restaurants/${_id}/detail`))
        .catch((error) => console.log(error))
})

router.delete('/:id/delete', (req, res) => {
    const _id = req.params.id
    const userId = req.user._id
    return Restaurants.findByIdAndDelete({ _id, userId })
        .then(() => res.redirect(`/`))
        .catch(error => console.log(error))
})

module.exports = router