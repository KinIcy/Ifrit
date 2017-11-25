/**
  @author Juan Sebastian Rivera
  @author Edited by : Daniel Hernandez, Jason Lopez
  @fileOverview This code represents the MongoDB schema for User
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Profile = require('../models/profile');

const UserSchema = new mongoose.Schema({
  password: { type: String, select: false },
  name: { type: String, required: true },
  familyName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  genre: { type: String, required: true, validate: /^[mf-]$/i },
  aboutMe: String,
  email: { type: String, unique: true, lowercase: true },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: { type: Date, default: Date.now() },
  personalProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
  },
  anonymousProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
  },
});

/**
 * @todo Document me
 */
UserSchema.pre('save', (next) => {
  // if ( !user.isModified('password')) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    return bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
