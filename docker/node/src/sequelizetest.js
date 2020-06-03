require('dotenv').config()
const {Sequelize} = require('sequelize')

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectOptions: {
    timezone: "Etc/GMT0"
  },
  dialect: 'mariadb'
})

exports.getUsers = async () => {
  sequelize.query("select * from tbl_users").spread((results, metadata) => {
    console.log(results[0])
    sequelize.close()
    return results[0]
  })
}
