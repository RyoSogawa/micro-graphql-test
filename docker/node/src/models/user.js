'use strict'
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    birth: DataTypes.DATE,
    countryCode: {
      type: DataTypes.INTEGER,
      field: 'country_code'
    },
    email: DataTypes.STRING,
    prefectureCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'prefecture_code'
    }
  }, {
    underscored: true,
  })
  user.associate = function (models) {
    // associations can be defined here
  }
  return user
}