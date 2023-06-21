if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const bcrypt = require('bcryptjs')
const restaurantList = require('models-file/seeds/restaurantList.json').results
const userList = require('models-file/seeds/userList.json').users
const Restaurants = require('models-file/restaurant')
const User = require('models-file/user')
const db = require('config-file/mongoose')

db.once("open", () => {
    Promise.all(userList.map(user => {
        const { name, email, password, restaurantIndexes } = user
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt, null)
        // create seed users
        return User.create({
            name,
            email,
            password: hash
        })
            .then(user => {
                // get user's restaurantIndexes
                const restaurants = restaurantIndexes.map(index => {
                    const restaurant = restaurantList[index]
                    restaurant.userId = user._id
                    return restaurant
                })
                // create seed restaurants to user
                return Restaurants.create(restaurants)
            })
    }))
        .then(() => {
            console.log("restaurantSeeder done!")
            process.exit()
        })
        .catch(err => console.log(err))
        .finally(() => db.close())
    console.log('done')
})