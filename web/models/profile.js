/*
  Author: Juan Sebastian Rivera
  Date: 11/11/2017
  Project: Red Social
  Description: This code represents the MongoDB schema for profile
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = require('../models/post');

const ProfileSchema = new Schema({
  profileName: String,
  arrayPublication: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  arrayFollowers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  }],
});

module.exports = mongoose.model('Profile', ProfileSchema);
