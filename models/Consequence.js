const mongoose = require('mongoose');

const ConsequenceSchema = new mongoose.Schema({
    consequence_label: {
        type: String,
        required: true,
    },
    consequence_detail: {
        type: String,
        required: true
    },
    consequence_recipient: {
        type: String,
        required: true
    },
    //?
    // deadline: {
    //     type: fk? same as this field in task,
    // },
    //  //not visible to user
    
    // consequence_action: {
    //     type:?,
    // },
    // connected_task: {
    //     type: fk?,
    // },
    
    //stretches
    // fluster_factor: {
    //     type: rating?,
    // },
    // reuseable:{
    //     type: Boolean,
    //     default: 'false'
    // },
    // use_count: {
    //     ?
    // },
    // set_as_inactive: {
    //     type: Boolean,
    //     default: false
    // }
});



module.exports = Consequence = mongoose.model('consequence', ConsequenceSchema);