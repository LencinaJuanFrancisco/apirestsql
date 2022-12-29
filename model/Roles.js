const { DataTypes } = require('sequelize')
const db = require('./connect')

const rolesModel = db.define('Roles',{
    name: DataTypes.STRING,
    description: DataTypes.STRING
})

module.exports = rolesModel