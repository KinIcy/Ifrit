/**
  @author Juan Sebastian Rivera
  @author  Edited by : Daniel Hernandez
  @fileOverview This code represents the MongoDB schema for Profile
 */

const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  profileName: { type: String, required: true },
  publications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  }],
});

module.exports = mongoose.model('Profile', ProfileSchema);
