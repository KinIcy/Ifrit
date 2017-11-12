/*
  Author: Juan Sebastian Rivera
  Date: 11/11/2017
  Project: Red Social
  Description: This code represents the MongoDB schema for posts
*/

const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection('mongodb://localhost/myDatabase');

const Schema = mongoose.Schema;

autoIncrement.initialize(connection);

const postSchema = new Schema({
  idPublication: { type: Number, default: 0 },
  text: String,
  date: Date,
  arrayComment: Array,
  arrayLike: Array,
  arrayNoLike: Array,
  arrayFollow: Array,
});

postSchema.plugin(autoIncrement, 'idPublication');

const post = mongoose.model('post', postSchema);

module.exports = post;
