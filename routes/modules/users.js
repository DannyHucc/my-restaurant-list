const express = require('express')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const validator = require('validator')
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

router.post('/register', async (req, res, next) => {
    try {
        const { name, email, password, confirmPassword } = req.body
        const errors = []
        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()_+-={}\[\]\\:;"'<>?,.\/])[A-Za-z\d~!@#$%^&*()_+-={}\[\]\\:;"'<>?,.\/]{8,20}$/
        // check if the register info is valid
        if (!email.trim() || !passport || !confirmPassword) {
            errors.push({ message: 'Please fill in email, password, and confirm password fields.' })
        }

        if (!validator.isEmail(email)) {
            errors.push({ message: 'Email address is invalid.' })
        }

        if (!passwordRegex.test(password)) {
            errors.push({ message: 'The password must be 8-20 characters long, contain letters and numbers and symbols.' })
        }

        if (password !== confirmPassword) {
            errors.push({ message: 'The password confirmation dose not match.' })
        }

        if (errors.length) {
            return res.render('register', { errors, name, email, password, confirmPassword })
        }
        // check if the email already exists
        const isUserExisted = await User.exists({ email })
        if (isUserExisted) {
            errors.push({ message: 'User already exists!' })
            return res.render('register', { errors, name, email, password, confirmPassword })
        }
        // create the user register information
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt, null)
        await User.create({ name, email, password: hash })
        req.flash('success_msg', 'Register successfully! Please login to your account.')
        return res.redirect('/users/login')
    } catch (error) {
        next(error)
    }
})

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success_msg', 'You have successfully logged out.')
    res.redirect('/users/login')
})

module.exports = router