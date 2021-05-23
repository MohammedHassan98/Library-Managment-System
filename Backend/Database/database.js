const Sequelize = require('sequelize')
const path = require('path')

const Database = new Sequelize({
  dialect: 'sqlite',
  storage:  path.join(__dirname, `Library.sqlite`)
})

module.exports = Database
