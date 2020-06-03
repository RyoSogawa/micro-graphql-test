module.exports = {
  up: async function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('users', 'email', {
        type: Sequelize.STRING,
        after: 'country_code' // PostgreSQLでは無効なオプションです
      }),
      queryInterface.addColumn('users', 'prefecture_code', {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        after: 'email' // PostgreSQLでは無効なオプションです
      })
    ]
  },

  down: async function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('users', 'email'),
      queryInterface.removeColumn('users', 'prefecture_code')
    ]
  }
}