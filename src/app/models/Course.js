const mongoose = require('mongoose')
var slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoID: { type: String, required: true },
    anpha: { type: String, maxLength: 255 },
    beta: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Course', Course)
