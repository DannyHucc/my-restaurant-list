const express = require('express')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const User = require('models-file/user')
const router = express.Router()

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
}))

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body

        const isUserExisted = await User.exists({ email })
        if (isUserExisted) {
            console.log('User already exists.')
            return res.render('register', { name, email, password, confirmPassword })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt, null)
        await User.create({ name, email, password: hash })
        return res.redirect('/users/login')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router