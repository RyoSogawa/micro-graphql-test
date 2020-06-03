const users = require('./users')

exports.resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return `Hello ${args.name}!`
    },
    getUsers(parent, args, context) {
      return users.getUsers()
    },
    getUser(parent, args, context) {
      return users.getUser(args.id)
    },
  },
  Mutation: {
    createUser(parent, args, context) {
      return users.createUser(args)
    },
    updateUser(parent, args, context) {
      return users.updateUser(args.id, args)
    },
    deleteUser(parent, args, context) {
      return users.deleteUser(args.id)
    },
  }
}