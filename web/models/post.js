/**
  @author Juan Sebastian Rivera
  @author  Edited by : Daniel Hernandez
  @fileOverview This code represents the MongoDB schema for Posts
 */

const mongoose = require('mongoose');
const CommentSchema = require('../models/comment');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  text: String,
  date: Date,
  arrayComment: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment',
  }],
  arrayLike: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',

  }],
  arrayNoLike: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
  }],
  arrayFollow: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
  }],
});

module.exports = mongoose.model('Post', PostSchema);
