/*
  Author: Juan Sebastian Rivera
  Date: 11/11/2017
  Project: Red Social
  Description: This code represents the MongoDB schema for profile
*/

const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection('mongodb://localhost/myDatabase');

const Schema = mongoose.Schema;

autoIncrement.initialize(connection);

const profileSchema = new Schema({
  idProfile: { type: Number, default: 0, unique: true },
  profileName: String,
  arrayPublication: Array,
  arrayProfiles: Array,
});

profileSchema.plugin(autoIncrement, 'idProfile');

const profile = mongoose.model('profile', profileSchema);

module.exports = profile;
