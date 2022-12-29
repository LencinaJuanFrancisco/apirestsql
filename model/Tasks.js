const {DataTypes} = require('sequelize')
const db = require('./connect')

const tasksModel = db.define('Tasks',{
    name: DataTypes.STRING,
    description: DataTypes.STRING
})

module.exports = tasksModel