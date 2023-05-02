const Restaurant = require('models-file/restaurant')
const seedsData = require('models-file/restaurant.json').results
const db = require('config-file/mongoose')

db.once("open", () => {
    Restaurant.create(seedsData)
        .then(() => {
            console.log("restaurantSeeder done!")
            db.close()
        })
        .catch(err => console.log(err))

    console.log('done')
})