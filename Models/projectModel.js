const mongoose = require('mongoose')

const projectScheme = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    overview: {
        type:String,
        required: true
    },
    language: {
        type:String,
        required: true
    },
    demo: {
        type:String,
        required: true
    },
    github: {
        type:String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    userId: {
        type:String,
        required: true
    },
})

const projects = mongoose.model('projects',projectScheme)

module.exports = projects