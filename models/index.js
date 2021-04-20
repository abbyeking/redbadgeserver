const User = require('./user')
const Podcast = require('./podcast')
const Notes = require('./notes')

//db association sets up here
User.hasMany(Podcast) //podcast is model
Podcast.belongsTo(User) //sets up extra column in table; podcast should belong to many users

User.hasMany(Notes)
Notes.belongsTo(User)

Podcast.hasMany(Notes)
Notes.belongsTo(Podcast)

module.exports = {
    User,
    Podcast,
    Notes
}