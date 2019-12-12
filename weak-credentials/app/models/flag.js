'use strict'
module.exports = (sequelize, DataTypes) => {
  const attributes = {
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }
  const Flag = sequelize.define('Flag', attributes)
  return Flag
}
