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

const userSchema = new Schema({
  idUser: { type: Number, default: 0, unique: true },
  password: String,
  login: String,
  name: String,
  familyName: String,
  dateOfBirth: Date,
  sex: String,
  aboutMe: String,
  email: String,
  personalProfile: Number,
  anonymousProfile: Number,
});

userSchema.plugin(autoIncrement, 'idUser');

const user = mongoose.model('user', userSchema);

module.exports = user;
