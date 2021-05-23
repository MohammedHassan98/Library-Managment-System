const Sequelize = require('sequelize')
const db = require('../Database/database')

const Book = db.define('Books', {
  BookId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  Price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Description: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Book
