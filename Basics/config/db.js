const mongoose = require('mongoose')

const mongoserver = mongoose.connect('mongodb://0.0.0.0/basics').then(() => {
    // console.log('connected to DB');
    
})

module.exports = mongoserver