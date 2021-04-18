const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('notes', {
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tier: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    date: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
})