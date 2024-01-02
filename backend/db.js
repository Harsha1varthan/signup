const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://admin:VZNySszOTwsNsYQd@cluster0.h4q0kcs.mongodb.net/Signin')

const userSchema = mongoose.Schema({
    user: String,
    password: String
})

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}