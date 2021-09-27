
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    passsword: { 
        type: String, required: true
     },
      timestamps: true
       
})
module.exports = mongoose.model('users', UserSchema)