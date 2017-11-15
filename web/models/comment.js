/**
  @author Juan Sebastian Rivera
  @author  Edited by : Daniel Hernandez
  @fileOverview This code represents the MongoDB schema for Comment
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
