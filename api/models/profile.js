/**
  @author Juan Sebastian Rivera
  @author  Edited by : Daniel Hernandez
  @fileOverview This code represents the MongoDB schema for Profile
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
