const mongoose = require('mongoose')

const TaskShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name '],
        trim: true,
        maxlenght: [20, 'mora iamti manje od 20 slova']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskShema)