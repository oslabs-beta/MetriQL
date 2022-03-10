const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {type: String, required: true},
  displayName: {type: String, required: false},
  userName: {type: String, required: true},
  photo: {type: String, required: false},
});

module.exports = mongoose.model('user', userSchema);