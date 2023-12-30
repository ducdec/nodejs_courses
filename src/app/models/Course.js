const mongoose = require('mongoose')
var slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Course = new Schema(
  {
    //id_Course: string,
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoID: { type: String, required: true },
    //audiofile: String,
    anpha: { type: String, maxLength: 255 },
    beta: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  },
)

mongoose.plugin(slug)

//Course.plugin(AutoIncrement)

Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
}) //them method

module.exports = mongoose.model('Course', Course)
