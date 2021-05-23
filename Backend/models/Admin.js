const Sequelize = require('sequelize')
const db = require('../Database/database')

const Admin = db.define('Admins', {
  AdminId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Mail: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Admin
