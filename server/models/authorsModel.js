const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required:[true, "Name is required"], minlength:[4, "Name must be a minimum of 4 characters"]},
})

module.exports = {
    Author: mongoose.model('Author', AuthorSchema)
}