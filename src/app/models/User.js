const mongoose = require('mongoose')
var slug = require('mongoose-slug-updater')

const Schema = mongoose.Schema

const User = new Schema(
  {
    username: String,
    password: String, // (được bảo mật)
    email: String,
    role: { type: String, enum: ['1', '2'] },
    liked_courses: [{ type: String, ref: 'Courses' }],
  },
  {
    timestamps: true,
  },
)

mongoose.plugin(slug)

//Course.plugin(AutoIncrement)

module.exports = mongoose.model('User', User)
