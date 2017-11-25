/**
  @author Juan Sebastian Rivera
  @author  Edited by : Daniel Hernandez
  @fileOverview This code represents the MongoDB schema for Profile
 */

const mongoose = require('mongoose');

const Post = require('./post');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  }],
  blackList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  }],
});

/**
 * Creates a new post in a profile.
 * @param {String} content - content of the post
 * @param {String} authorId - id of the author of the post
 */
async function createPost(content, authorId) {
  if (this.blackList.indexOf(authorId) > 0) {
    throw new Error('User can not post in this profile.');
  }
  try {
    const post = await Post.create({ content, author: authorId });
    this.posts.push(post);
    await this.save();
    return this;
  } catch (error) {
    throw error;
  }
}
ProfileSchema.methods.createPost = createPost;

module.exports = mongoose.model('Profile', ProfileSchema);
