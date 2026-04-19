const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        default: '',
    },
    date: {
        type: String,
        required: true,
    },

    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },

    done: {
        type: Boolean,
        default: false,
    },

}, {timestamps: true});

const TaskModel = mongoose.model('Task', taskSchema);
module.exports = TaskModel;