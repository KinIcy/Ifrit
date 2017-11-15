/*
  Author: Juan Sebastian Rivera
  Date: 11/11/2017
  Project: Red Social
  Description: This code represents the MongoDB schema for comments
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: String,
  date: Date,
  arrayLike: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',

  }],
  arrayNoLike: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
  }],
});

module.exports = mongoose.model('Comment', CommentSchema);
