const express = require('express')
const restaurant = require('models-file/restaurant')
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

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    return Restaurants.findById(id)
        .lean()
        .then((restaurant) => res.render('edit',
            { restaurant }))
        .catch((error) => console.log(error))
})

router.put('/:id/edit', (req, res) => {
    const id = req.params.id
    return Restaurants.findByIdAndUpdate(id, req.body)
        .then(() => res.redirect(`/restaurants/${id}/detail`))
        .catch((error) => console.log(error))
})

router.delete('/:id/delete', (req, res) => {
    const id = req.params.id
    return Restaurants.findById(id, req.body)
        .then((restaurant) => restaurant.remove())
        .then(() => res.redirect(`/`))
        .catch(error => console.log(error))
})

module.exports = router