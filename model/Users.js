const { DataTypes } = require('sequelize')
const db = require('./connect')

const usersModel = db.define('Users',{
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address:DataTypes.STRING
})

module.exports = usersModel