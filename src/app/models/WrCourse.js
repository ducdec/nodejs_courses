const mongoose = require('mongoose')
var slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const WrCourse = new Schema(
  {
    WrCourse_name: String,
    instructor: String,
    description: String,
  },
  {
    timestamps: true,
  },
)

mongoose.plugin(slug)

//Course.plugin(AutoIncrement)

WrCourse.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
}) //them method

module.exports = mongoose.model('WrCourse', WrCourse)
