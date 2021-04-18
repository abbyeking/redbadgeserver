
module.exports = (sequelize, DataTypes) => {
    const Podcast = sequelize.define('podcast', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        images: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
    return Podcast;
}



