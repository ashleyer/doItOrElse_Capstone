const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    //not visible to user
    // consequence_list: {
    //     type: foreign key?,
    // },
    // task_list: {
    //     type: foreign key?,
    // },
});
//stretches
// avatar_or_img: {
//     type: String,
//     require: false
// },
// stats: {
//     type: String,
//     require: false
// }


module.exports = User = mongoose.model('user', UserSchema);