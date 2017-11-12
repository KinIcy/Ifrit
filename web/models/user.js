/*
  Author: Juan Sebastian Rivera
  Date: 11/11/2017
  Project: Red Social
  Description: This code represents the MongoDB schema for comments
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  password: String,
  login: String,
  name: String,
  familyName: String,
  dateOfBirth: Date,
  sex: String,
  aboutMe: String,
  email: String,
  personalProfile: {
    Type: Schema.Types.ObjectId,
    ref: 'profile',
  },
  anonymousProfile: {
    Type: Schema.Types.ObjectId,
    ref: 'profile',
  },
});

const user = mongoose.model('user', userSchema);

module.exports = user;
