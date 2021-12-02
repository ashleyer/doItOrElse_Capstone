const mongoose = require('mongoose');

const ConsequenceSchema = new mongoose.Schema({
    consequence_label: {
        type: String,
    },
    consequence_detail: {
        type: String,
    },
    consequence_recipient: {
        type: String,
    }
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



// module.exports = Consequence = mongoose.model('consequence', ConsequenceSchema);

const Consequence = mongoose.model('consequence', ConsequenceSchema);

module.exports = Consequence;