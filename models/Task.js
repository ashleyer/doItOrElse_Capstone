const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task_title: {
        type: String,

    },
    task_detail: {
        type: String,

    }
    // deadline: {
    //     type: Date,
    //     // required: true
    // },
    // completed_no_consequence: {
    //     type: Boolean,
    // },

    //not visible to user and or does not require user input
    // active: {
    //     type: Boolean,
    // },
    // date_created: {
    //     type: String,
    //     default: Date.now,
    //     required: true
    // },
    // user_id: {
    //     type: fk,
    // },
    // consequence: {
    //     type: fk,
    // },
    //stretches
    // recurring: {
    //     type: Boolean
    // },
    // priority_rating: {
    //     type: 1-5,
    // },
});


const Task = mongoose.model('task', TaskSchema);
//module.exports = Task = mongoose.model('task', TaskSchema);
module.exports = Task;