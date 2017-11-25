/**
  @author Juan Sebastian Rivera
  @author Edited by : Daniel Hernandez, Jason Lopez
  @fileOverview This code represents the MongoDB schema for Posts
 */

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  content: { type: String, required: true },
  date: { type: Date, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  }],
  unlikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  }],
});

module.exports = mongoose.model('Post', PostSchema);
