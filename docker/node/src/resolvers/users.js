const {user} = require('../models')

exports.getUsers = async where => {
  return user.findAll({
    where: where
  })
}

exports.getUser = async id => {
  return user.findByPk(id)
}

exports.createUser = async param => {
  return user.create(param)
}

exports.updateUser = async (id, param) => {
  const ret = user.update(param, {
    where: {id: id}
  })
  console.log(ret)
  return true
}

exports.deleteUser = async id => {
  return user.destroy({
    where: {id: id}
  })
}