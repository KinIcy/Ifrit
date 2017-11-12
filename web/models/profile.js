/*
  Author: Juan Sebastian Rivera
  Date: 11/11/2017
  Project: Red Social
  Description: This code represents the MongoDB schema for profile
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  profileName: String,
  arrayPublication: [{
    Type: Schema.Types.ObjectId,
    ref: 'post',
  }],
  arrayFollowers: [{
    Type: Schema.Types.ObjectId,
    ref: 'profile',
  }],
});

const profile = mongoose.model('profile', profileSchema);

module.exports = profile;
