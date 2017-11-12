/*
  Author: Juan Sebastian Rivera
  Date: 11/11/2017
  Project: Red Social
  Description: This code represents the MongoDB schema for comments
*/

const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection('mongodb://localhost/myDatabase');

const Schema = mongoose.Schema;

autoIncrement.initialize(connection);

const commentSchema = new Schema({
  idComment: { type: Number, default: 0, unique: true },
  text: String,
  date: Date,
  arrayLike: Array,
  arrayNoLine: Array,
});

commentSchema.plugin(autoIncrement, 'idComment');

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;
