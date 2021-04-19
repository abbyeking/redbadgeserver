module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define('notes', {
    notes: {
        type: DataTypes.STRING,
        allowNull: true
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