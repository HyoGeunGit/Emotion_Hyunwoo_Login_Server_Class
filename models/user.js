const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: String,
    id: String,
    pw: String,
    type: Number
});

module.exports = mongoose.model('users', usersSchema);