const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    firstName: {
        required:true,
        type: String
    },
    lastName: {
        required:true,
        type: String
    },
    email: {
        required:true,
        type: String
    },
    jobTitle: {
        required:true,
        type: String
    },
    password: {
        required:true,
        type: String
    }
})

module.exports = mongoose.model("Member", memberSchema)
// module.exports = mongoose.model('Data', dataSchema)