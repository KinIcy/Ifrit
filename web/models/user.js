/*
  Author: Juan Sebastian Rivera
  Date: 11/11/2017
  Project: Red Social
  Description: This code represents the MongoDB schema for comments
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = require('../models/profile');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  password: { type: String, select: false },
  name: String,
  familyName: String,
  dateOfBirth: Date,
  genre: String,
  aboutMe: String,
  email: { type: String, unique: true, lowercase: true },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date,
  personalProfile: {
    type: Schema.Types.ObjectId,
    ref: 'profile',
  },
  anonymousProfile: {
    type: Schema.Types.ObjectId,
    ref: 'profile',
  },
});

UserSchema.pre('save', (next) => {
  let user = this;
  // if ( !user.isModified('password')) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
