module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define('notes', {
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    pid: {
        type: DataTypes.INTEGER,
    },
    // tier: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    // },
    // date: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    // }
})
return Notes;
}