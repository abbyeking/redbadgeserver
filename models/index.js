const User = require('./user')
const Podcast = require('./podcast')
const Notes = require('./notes')

//db association sets up here
user.hasMany(podcast) //podcast is model
podcast.belongsTo(user) //sets up extra column in table

user.hasMany(notes)
notes.belongsTo(user)

podcast.hasOne(notes)
notes.belongsTo(podcast)

module.exports = {
    User,
    Podcast,
    Notes
}