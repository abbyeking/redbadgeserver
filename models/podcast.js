module.exports = (sequelize, DataTypes) => {
    const Podcast = sequelize.define('podcast', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true
        // },
        notes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tier: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // resources: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        images: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Podcast;
}